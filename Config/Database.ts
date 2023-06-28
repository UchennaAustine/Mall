import mongoose from "mongoose"

const Mongo_Link = "mongodb://0.0.0.0:27017/MallDB"

async function dbase(){
    try {
        const C = await mongoose.connect(Mongo_Link)
        console.log(`Database is connected to ${C.connection.host}`);
        
    } catch (error) {
        console.log("Source of Error is the  database connection");
        
    }
}

export default dbase