const mongoose=require("mongoose");

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide the name!'],
        maxlength:[20,'Name cannot be 20 characters!'],
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

module.exports=mongoose.model("todos",TaskSchema);