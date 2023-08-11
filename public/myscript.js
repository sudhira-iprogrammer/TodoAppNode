const listvalue = document.getElementById("name");
const add = document.getElementById("add");

// --------------------------------------- add data ------------------------------------------

add.addEventListener("click", () => {
  const info = { data: listvalue.value };
  fetch("/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("name").value = "";
      fetch_pending_data();
      fetch_completed_data();
    })
    .catch((err) => console.log(err));
});

// --------------------------------------- fetch Pending data ------------------------------------------

function fetch_pending_data() {
  const info = { status: "pending" };
  fetch("/fetch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      let arr = data.map((item) => {
        return item;
      });
      document.querySelector("main").innerHTML = `
      <ol>
          ${generate_pendingList(arr)}
      </ol>
      `;
    })
    .catch((err) => console.log(err));
}

// --------------------------------------- fetch Completed data ------------------------------------------

function fetch_completed_data() {
  const info = {
    status: "completed",
  };
  fetch("/fetch", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      let arr = data.map((item) => {
        return item;
      });
      document.querySelector("completed").innerHTML = `
      <ol id="done">
        ${generate_completedList(arr)}    
      </ol>
      `;
    })
    .catch((err) => console.log(err));
}

// --------------------------------------- create html Pending list ------------------------------------------

function generate_pendingList(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `
      <li class="p-1 m-2">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-7 mt-2 text-start text-dark"><h6><b>${arg[i].data}</b></h6></div>
          <div class="col-md-4">
              <button value="${arg[i]._id}|${arg[i].data}" onclick="editTask(value)" class="m-1" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="blue" class="bi bi-hammer" viewBox="0 0 16 16">
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                </svg>
              </button>
              <button value="${arg[i]._id}" onclick="delTask(value)" class="m-1" id="del">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </button>
              <button value="${arg[i]._id}" onclick="doneTask(value)" class="m-1" id="done">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="darkgreen" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
                </svg>
              </button>
          </div>
        </div>
      </li>
      `;
  }
  return items;
}

// --------------------------------------- create html Completed list ------------------------------------------

function generate_completedList(arg) {
  let items = "";

  for (let i = 0; i < arg.length; i++) {
    items += `
    <li class=" m-2">
    <div class="row m-0" id="done_right_part">
      <div class="col-md-2" id="done_symbol">
        <b>
        <img src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" alt="" srcset="">
      </b>
      </div>
      <div class="col-md-6 mt-2 p-1 ps-3 text-start text-dark" ><h6><b>${arg[i].data}</b></h6></div>
        <div class="col-md-4 text-end pt-1">
          <button value="${arg[i]._id}" onclick="addPending(value)" class="m-1" id="pend">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="currentColor" class="bi bi-escape" viewBox="0 0 16 16">
                <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z"/>
                <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732l5.096 5.096Z"/>
            </svg>
          </button>
          <button value="${arg[i]._id}" onclick="delTask(value)" class="m-1" id="del">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
          </button>
      </div>
    </div>
    </li>
    `;
  }
  return items;
}

fetch_pending_data();
fetch_completed_data();

// --------------------------------------- edit function ------------------------------------------

var data_id = "";

function editTask(id) {
  const data = id.split("|");
  document.getElementById("editname").value = data[1];
  data_id = data[0];
}

function edit_data(data) {
  const info = { id: data_id, data: data };

  fetch("/update", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json)
    .then((data) => {
      fetch_pending_data();
      fetch_completed_data();
    })
    .catch((err) => console.log(err));
}

// --------------------------------------- delete function ------------------------------------------

function delTask(data) {
  const info = { data: data };

  fetch("/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      fetch_pending_data();
      fetch_completed_data();
    })
    .catch((err) => console.log(err));
}

// --------------------------------------- completed function ------------------------------------------

function doneTask(data) {
  const info = { id: data, data: "completed" };

  fetch("/done", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      fetch_pending_data();
      fetch_completed_data();
    })
    .catch((err) => console.log(err));
}

// --------------------------------------- add return to pending function ------------------------------------------

function addPending(data) {
  const info = { id: data, data: "pending" };

  fetch("/addPending", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(info),
  })
    .then((response) => response.json())
    .then((data) => {
      fetch_pending_data();
      fetch_completed_data();
    })
    .catch((err) => console.log(err));
}
