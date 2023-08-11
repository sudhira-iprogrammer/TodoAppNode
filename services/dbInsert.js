const collection = require("../dbConnection/mongoCloudConnection");

insert = (req, res) => {
  const result = collection.insertOne({
    data: req.body.data,
    display: 0,
    status: "pending",
  });
};

module.exports = insert;
