const express = require("express");
const technologyControler=require("../component/Technology")

const technologyRouter=express.Router()
technologyRouter.route("/Technology")
.get(technologyControler.apiController)
module.exports=technologyRouter