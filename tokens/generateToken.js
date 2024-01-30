
var jwt = require('jsonwebtoken');

module.exports = function (result) {
    let token = jwt.sign(result, process.env.KEY);
    return token;
}