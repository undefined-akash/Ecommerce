const mongoose= require("mongoose");

const connectDatabase=async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb://localhost:27017/iBook") 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}



module.exports=connectDatabase;