const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:Sudhir0822@cluster0.j2odslv.mongodb.net/todoList_node?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then(() => {
  console.log("Connected to MongoDB Atlas");
});

const db = client.db("todoList_node");
const collection = db.collection("todolist");

module.exports = collection;
