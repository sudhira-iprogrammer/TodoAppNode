const dbInsert = require("../services/dbInsert");

insert = (req, res, next) => {
  dbInsert(req, res);
  next();
};

module.exports = insert;
