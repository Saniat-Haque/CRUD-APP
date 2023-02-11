
class customAPIError extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
    }
}

const createcustomError=(msg,statuscode)=>{
    return new customAPIError(msg,statuscode)
}

module.exports={customAPIError,createcustomError}