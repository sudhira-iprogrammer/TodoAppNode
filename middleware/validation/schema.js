const joi = require("joi");

schema = joi.object({
  data: joi.string().min(1).max(1000).required(),
});

module.exports = schema;
