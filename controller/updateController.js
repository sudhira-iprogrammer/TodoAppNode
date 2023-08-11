const dbUpdate = require("../services/dbUpdate");

update_data = (req, res) => {
  dbUpdate(req, res);
};

module.exports = update_data;
