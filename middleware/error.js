const ErrorResponse = require("../utills/errorResponse");

const errorHandler=(err,req,res,next)=>{

    let error={...err}

    error.message=err.message

    console.log(error);
    console.log(err.name); 
//    next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))


    if(err.name==='CastError'){
        const message=`Resource not found `

        error= new ErrorResponse(message,404)
    }

    
    if(err.code===11000){
        const message=`Duplicate field  value enterend`
        error=new ErrorResponse(message,400)
    }

    if(err.name==='ValidationError'){
        const message=Object.values(err.errors).map(val=>val.message)
        error= new ErrorResponse(message,400)
    }


    res.status(error.statusCode || 500  ).json({
        success:false,
        error:error.message || 'Server Error'
    })
}

module.exports=errorHandler