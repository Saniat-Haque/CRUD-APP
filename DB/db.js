const mongoose=require("mongoose");
const URL="mongodb+srv://new_database:987654321@cluster0.n4pecn6.mongodb.net/demo?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);

const connectdb=()=>{
    return mongoose.connect(URL,
    ()=>{
        try {
            console.log("CONNECTED TO THE DATABASE---");
        } catch (error) {
            console.log(error);
        }
    });
}

module.exports=connectdb