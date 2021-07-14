const { readUsers } = require("./readUsers.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  readUsers: (req, res) => {
    readUsers((err, result) => {
      apiResponse(err, res, result);
    });
  },
};
