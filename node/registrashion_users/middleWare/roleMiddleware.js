const jwt = require('jsonwebtoken')
const {secret} = require('../config.js')

module.exports = function(roles){
   return function (req, res, next) {
      if (req.method === "OPTIONS"){
      next()
      }
      try{
         const token = req.headers.authorization.split(' ')[1]
         if(!token) {
            return res.status(403).json({message: "User not found!"})
         }
         const {roles: userRoles} = jwt.verify(token, secret)
         let hasRole = false
         userRoles.forEach(role => {
            if (roles.includes(role)){
               hasRole = true
            }
         })
         if (!hasRole){
            return res.status(403).json({message: 'We dont have level enought'})
         }
         next()
      } catch(e){
         console.log(e)
         }
   }
}





