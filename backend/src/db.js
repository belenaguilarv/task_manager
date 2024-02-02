import mongoose from "mongoose";
//import moment from "moment-timezone";

//moment.tz.setDefault("UTC");

export const connectDB = async () => {
    try {
       await mongoose.connect('mongodb://localhost/taskmanagerdb');
       console.log("DB is connected");
    }catch(error) {
        console.log(error);
    }
};