
exports.admin = function(req,res,next){
    if(req.role != "ADMIN"){
        return res.status(403).send("Access denied.")
    }
    next()
}

exports.user = function(req,res,next){
    if(req.role != "USER"){
        return res.status(403).send("Access denied.")
    }
    next()
}

exports.developer = function(req,res,next){
    if(req.role != "DEVELOPER"){
        return res.status(403).send("Access denied.")
    }
    next()
}