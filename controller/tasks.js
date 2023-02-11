const TaskSchema=require("../model/task");
const asyncWrapper=require("../middleware/asyinc");
const {createcustomError}=require("../errors/customerrors");

// GET ALL TASK----

const getalltask=asyncWrapper( async (req,res)=>{
        const task= await TaskSchema.find({})
        res.status(200).json({task});   
});

//CREATE TASK----
const createTask=asyncWrapper( async(req,res)=>{
        const task=await TaskSchema.create(req.body)
        res.status(201).json({task});
});
//GET TASK----
const getTask=asyncWrapper( async(req,res,next)=>{
        const {id:taskId}=req.params
        const task=await TaskSchema.findOne({_id:taskId})
        if (!task) {
            return next(createcustomError(`No task with id: ${taskId}`,404))
        }
        res.status(200).json({task});    
});
//DELETE TASK----
const deleteTask= asyncWrapper( async(req,res)=>{
        const {id:taskId}=req.params
        const task = await TaskSchema.findByIdAndDelete({_id:taskId})
        if (!task) {
            return next(createcustomError(`No task with id: ${taskId}`,404))
        }
        res.status(200).json({task});   
});
//UPDATE TASK----
const updateTask=asyncWrapper( async(req,res)=>{
        const {id:taskId}=req.params
        const task=await TaskSchema.findByIdAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true,
        })
        if (!task) {
            return next(createcustomError(`No task with id: ${taskId}`,404))
        }
        res.status(200).json({task});
});


module.exports={
    getalltask,
    createTask,
    getTask,
    deleteTask,
    updateTask
}