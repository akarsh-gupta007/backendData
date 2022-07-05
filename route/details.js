const express = require("express");
const datailsControler=require("../component/details")

const detailsRouter=express.Router()
detailsRouter.route("/details")
.get(datailsControler.apicontroler)
module.exports=detailsRouter