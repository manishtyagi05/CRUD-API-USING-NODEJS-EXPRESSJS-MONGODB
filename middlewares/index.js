
const fs = require('fs');
//Middleware

//this function  create a log file about request coming to server storing time , method and route
function LogRequestResponse(fileName){

    return (req,res,next)=>{
      fs.appendFile(
        fileName,
        `\n${Date.now()}:${req.ip}${req.method}: ${req.path}\n`,
        (err,data)=>{
            next();
        }
      );
    }
}

module.exports = {
    LogRequestResponse,
}
