const { catchAsyncError } = require("../middlewares/catchAsyncError");

exports.homeController = catchAsyncError (async (req,res,next)=>{
     
    res.json({success:true,message:"This is home-page"});
    
})