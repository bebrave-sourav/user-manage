const {
  dbConnectionHandler,
  qryExcutionHandler,
} = require("./../common/commonDBHandeler");

module.exports = {
  updateUser: (userData, callBack) => {
    // const keys = Object.keys(userData);
    // const values = Object.values(userData);
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
         //qry=``update user set `;
        for (const property in userData) {
         // console.log(`${property}: ${userData[property]}`);
         qry=qry+`${property} = ${userData[property]}`;
        }
        // const qry = `update user set fname = "Subham", lname = "Manna" where id=${userData.id}`;
        connection.query(qry, (err, result) => {
          qryExcutionHandler(connection, err, result, callBack);
        });
      }
    });
  },
};
