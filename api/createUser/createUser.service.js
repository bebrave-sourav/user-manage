const {
  dbConnectionHandler,
  qryExcutionHandler,
} = require("./../common/commonDBHandeler");

module.exports = {
  createUser: (userData,callBack) => {
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
        const qry = `insert into user (fname,lname,email) values(?,?,?)`;
        connection.query(qry, [userData.fname, userData.lname, userData.email], (err, result) => {
          qryExcutionHandler(connection, err, result, callBack);
        });
      }
    });
  },
};
