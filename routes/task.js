const router=require("express").Router();
const {getalltask,createTask,getTask,updateTask,deleteTask}=require("../controller/tasks");

router.route("/").post(createTask).get(getalltask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router