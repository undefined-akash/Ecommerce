const ErrorHandler=require("../utils/errorhandler.js");

module.exports=(err,req,res,next)=>
{
    err.statusCode=err.statusCode || 500 ; //-> status code same hoga agr nhi hua toh 500
    err.message = err.message || "Internal server Error";

    // castError->  Wrong Mongodb Id Error
    if(err.name==="CastError"){
        const message= `Resource not found. Invalid: ${err.path}`;
        err =new ErrorHandler(message,400);
    }




    res.status(err.statusCode).json(
        {
            success:false,
            message:err.message,
        }
    )
}