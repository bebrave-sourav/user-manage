const { updateUser } = require("./updateUser.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  updateUser: (req, res) => {
    const userid = req.query.userid;
    const userData = req.body.userData;
    updateUser(userid, (err, result) => {
      apiResponse(err, res, result);
    });
  },
};
