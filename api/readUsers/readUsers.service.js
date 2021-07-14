const { dbConnectionHandler, qryExcutionHandler } = require("./../common/commonDBHandeler");

module.exports = {
  readUsers: (callBack) => {
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
        const qry = `select * from user`;
        connection.query(qry, (err, result) => {
          qryExcutionHandler(connection, err, result, callBack);
        });
      }
    });
  },
};
