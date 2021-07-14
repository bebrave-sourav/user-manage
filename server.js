require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./api/router");

//app setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

//app api
app.use("/", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`app started at port http://localhost:${process.env.APP_PORT}`);
});
