const { deleteUser } = require("./deleteUser.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  deleteUser: (req, res) => {
    const userid = req.query.userid;
    deleteUser(userid, (err, result) => {
      apiResponse(err, res, result);
    });
  },
};
