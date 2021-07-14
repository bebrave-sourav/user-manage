const mysql = require("mysql");

module.exports = {
  dbConnectionHandler: (callBack) => {
    const connectionConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
    const connection = mysql.createConnection(connectionConfig);
    connection.connect((err) => {
      if (err) {
        callBack(err);
      } else {
        callBack(null, connection);
      }
    });
  },
  qryExcutionHandler: (connection, err, result,callBack) => {
    connection.end();
    if (err) {
      callBack({ err, errmsg: "qry error" });
    } else {
      callBack(null, result);
    }
  },
};
