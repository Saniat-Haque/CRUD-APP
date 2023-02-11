const {customAPIError}=require("../errors/customerrors");

const errorHandler=(err,req,res,next)=>{
    if (err instanceof customAPIError) {
        return res.status(err.statuscode).json({msg:err.message})
    }
    return res.status(500).json({msg:`Something went wrong !, Try again latter`})

}
module.exports=errorHandler