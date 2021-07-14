const { readUser } = require("./readUser.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  readUser: (req, res) => {
    const userid = req.query.userid;
    readUser(userid, (err, result) => {
      apiResponse(err, res, result);
    });
  },
};
