exports.generatedError = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    res.status(500).json({message:err.message,errName:err.name})
}