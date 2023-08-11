const schema = require("./schema");

validation = (req, res, next) => {
  const info = req.body;
  console.log("i ", info);

  const result = schema.validate(info);

  if (!result.error) {
    console.log("validation sucess");
    next();
  } else {
    res.send("please enter text");
  }
};

module.exports = validation;
