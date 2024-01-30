const express = require("express");
const route = express.Router();
const {admin,user,developer } = require("../tokens/roles")
const {getAllUsers, getUsersByFeilds, updateUser, deleteUsers} = require("../services/userServices");

route.get("/",admin, getAllUsers);
route.get("/getbyfeilds",[admin,developer], getUsersByFeilds)
route.put("/update/:id",[admin, user,developer], updateUser)
route.delete("/:id",[admin, user,developer], deleteUsers)


module.exports = route;
