import { Task } from "@/models/task";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,content,userId} = await request.json();

    try{
        const task = new Task({
            title,
            content,
            userId
        });
        const createdTask = await task.save();

        return NextResponse.json(createdTask,{
            status:201,
        })
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message : "Failed to create task....!!",
            status : false,
        })
    }
}

export async function GET(request){
    
}