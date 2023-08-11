const express = require("express");
const path = require("path");
const validation = require("../middleware/validation/validation");
const insert_data = require("../controller/insertController");
const fetch_data = require("../controller/fetchController");
const delete_data = require("../controller/deleteController");
const done_data = require("../controller/doneController");
const update_data = require("../controller/updateController");

const bodyParser = require("body-parser");

const app = express();
const htmlPages = path.join(__dirname, "public");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.sendFile(`${htmlPages}/index.html`);
});

router.post("/insert", validation, insert_data, fetch_data);
router.post("/fetch", fetch_data);
router.post("/delete", delete_data);
router.post("/done", done_data);
router.post("/update", update_data);
router.post("/addPending", done_data);

module.exports = router;
