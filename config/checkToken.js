const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.get('Authorization')
    if(token){        
        token = token.split(' ')[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next()
    } else {
        req.user = null 
        return next()
    }
}