const collection = require("../dbConnection/mongoCloudConnection");
var ObjectId = require("mongodb").ObjectId;

delete_data = async (req, res) => {
  const body = req.body.data;

  const result = await collection.updateOne(
    { _id: new ObjectId(body) },
    { $set: { display: 1 } },
    { new: true }
  );
  res.send({ result: "deleted" });
};

module.exports = delete_data;
