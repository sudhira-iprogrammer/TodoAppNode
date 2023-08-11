const dbDone = require("../services/dbDone");

done_data = (req, res) => {
  dbDone(req, res);
};

module.exports = done_data;
