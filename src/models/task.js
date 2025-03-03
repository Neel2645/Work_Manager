import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title Required !!"]
    },
    content:{
        type:String,
        required:[true,"Content Required !!"]
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    addedDate:{
        type:Date,
        default:Date.now(),
    },
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true
    // },

})


export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema);