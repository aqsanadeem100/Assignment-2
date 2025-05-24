const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb conection string
        const con = await mongoose.connect("mongodb://localhost:27017/order_management");
        console.log(`Mongodb connected: ${con.connection.host}`);
    }catch(err){
        console.error(err);
    }
}

module.exports = connectDB;