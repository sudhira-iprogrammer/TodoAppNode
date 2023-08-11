const collection = require("../dbConnection/mongoCloudConnection");
const ObjectId = require("mongodb").ObjectId;

done_data = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status: data } }
  );
  res.send({ result: "completed" });
};

module.exports = done_data;
