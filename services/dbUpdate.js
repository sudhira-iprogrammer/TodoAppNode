const ObjectId = require("mongodb").ObjectId;
const collection = require("../dbConnection/mongoCloudConnection");

update_data = (req, res) => {
  const id = req.body.id;
  const data = req.body.data;

  const result = collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        data: data,
      },
    }
  );
  res.send({ result: "updated" });
};

module.exports = update_data;
