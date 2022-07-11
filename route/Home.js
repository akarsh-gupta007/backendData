const express = require("express");
const homeControler=require("../component/Home")

const homeRouter=express.Router()
homeRouter.route("/Home")
.get(homeControler.apiController)
module.exports=homeRouter