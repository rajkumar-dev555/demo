var jwt = require('jsonwebtoken');
const _ = require("lodash")

module.exports =function (req,res,next){
    if (_.isEmpty(req.body)) return res.status(400).send("There is no data");
    const {token} = req.body
    try{
        var decoded = jwt.verify(token, process.env.KEY);
        req.role = decoded.role
    }catch(error){
        res.status(400).send(error);
    }
    next()
  }