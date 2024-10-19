import express from "express";
const {usergetData} = require("../../Controller/User/UserController");

const userRoutes = express.Router();

userRoutes.get('/', usergetData);

export default userRoutes;
