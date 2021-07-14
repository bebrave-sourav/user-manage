const router = require("express").Router();
const { createUser } = require("./createUser/createUser.controller");
const { readUser } = require("./readUser/readUser.controller");
const { readUsers } = require("./readUsers/readUsers.controller");
const { updateUser } = require("./updateUser/updateUser.controller");
const { deleteUser } = require("./deleteUser/deleteUser.controller");

router.post("/user", createUser);
router.get("/user", readUser);
router.get("/user", readUsers);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

module.exports = router;
