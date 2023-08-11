const dbFetch = require("../services/dbFetch");

fetch_data = (req, res) => {
  dbFetch(req, res);
};

module.exports = fetch_data;
