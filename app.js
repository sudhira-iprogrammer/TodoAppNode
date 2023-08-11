const express = require("express");
const path = require("path");
const myRoute = require("./routes/myRoutes");
const bodyParser = require("body-parser");

const app = express();
const htmlPages = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(htmlPages));

app.use("/", myRoute);

app.listen(5000, () => {
  console.log("listening 5000 port");
});
