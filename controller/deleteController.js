const dbDelete = require("../services/dbDelete");

delete_data = (req, res) => {
  dbDelete(req, res);
};

module.exports = delete_data;
