const { dbConnectionHandler, qryExcutionHandler } = require("./../common/commonDBHandeler");

module.exports = {
  readUser: (userid, callBack) => {
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
        const qry = `select * from user where id=${userid}`;
        connection.query(qry, (err, result) => {
          qryExcutionHandler(connection, err, result, callBack);
        });
      }
    });
  },
};
