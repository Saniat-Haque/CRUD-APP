// require('dotenv').config()
const express=require("express");
const connectdb = require("./DB/db");
const router=require("./routes/task");
const notFound=require("./middleware/notfound");
const errorHandler=require("./middleware/errorHandler");

// -------CONFIG-------
const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello");
});

//------- ROUTING -------

app.use('/api/v1/task',router);
app.use(notFound);
app.use(errorHandler);

// --------SERVER LISTENING ---------

connectdb();
app.listen(3000,()=>{
    try {
        console.log("SERVER RUNNING---");
    } catch (error) {
        console.log(error);
    }
})