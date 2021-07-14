const { createUser } = require("./createUser.service");
const { apiResponse } = require("./../common/apiResponseHandler");

module.exports = {
  createUser: (req, res) => {
    const userData = req.body.userData;
    createUser(userData,(err, result) => {
      apiResponse(err, res, result);
    });
  },
};
