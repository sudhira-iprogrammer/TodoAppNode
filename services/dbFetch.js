const collection = require("../dbConnection/mongoCloudConnection");

fetch_data = async (req, res) => {
  const result = await collection
    .find({ display: 0, status: req.body.status })
    .toArray();
  res.send(result);
};

module.exports = fetch_data;

// async function xyz() {
//   const db = client.db("todoList_node");
//   const collection = db.collection("todolist");
//   const result = await collection.find({}).toArray();
//   console.log(result);
// }

// xyz();
