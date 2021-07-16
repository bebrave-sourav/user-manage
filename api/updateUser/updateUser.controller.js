const { updateUser } = require("./updateUser.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  updateUser: (req, res) => {
    const userData = req.body.userData;
    updateUser(userData, (err, result) => {
      apiResponse(err, res, result);
    });
  },
};
