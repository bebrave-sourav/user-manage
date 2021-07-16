const {
  dbConnectionHandler,
  qryExcutionHandler,
} = require("./../common/commonDBHandeler");

module.exports = {
  updateUser: (userData, callBack) => {
    const c = Object.keys(userData).length;
    dbConnectionHandler((err, connection) => {
      if (err) {
        callBack({ err, errmsg: "connection error" });
      } else {
        if (c > 1) {
          c1 = 1;
          qry = `update user set `;
          for (let property in userData) {
            if (property == "id")
              qry = qry + ` where ${property} = ${userData[property]}`;
            else {
              qry = qry + `${property} = '${userData[property]}'`;
              if (c1<c-1) 
                qry = qry+`, `;
            }
            c1++;
          }
          connection.query(qry, (err, result) => {
            qryExcutionHandler(connection, err, result, callBack);
          });
        }
      }
    });
  },
};
