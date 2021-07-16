const { suggUsers } = require("./suggUsers.service");
const {apiResponse}= require("./../common/apiResponseHandler");

module.exports = {
  suggUsers: (req, res) => {
    const userstrng = req.query.userstrng;
    suggUsers(userstrng, (err, result) => {
      apiResponse(err, res, result);
    });
  },
};
