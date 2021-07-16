const { dbConnectionHandler, qryExcutionHandler } = require("./../common/commonDBHandeler");

module.exports = {
  suggUsers: (userstrng, callBack) => {
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
        const qry = `select * from user where fname LIKE '%${userstrng}%' or lname LIKE '%${userstrng}%'`;
        console.log(qry);
        connection.query(qry, (err, result) => {
          qryExcutionHandler(connection, err, result, callBack);
        });
      }
    });
  },
};
