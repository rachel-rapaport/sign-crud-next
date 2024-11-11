import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request:NextRequest){
    try{
        await connect();
        const {name,email,password}= await request.json();
        const newUser=new User({name,email,password});
        await newUser.save();
        return NextResponse.json({message:"user creat seccessfull",user:newUser,status:201})
    }catch(error){
        return NextResponse.json({message:"user not creat",error,status:500})
    }
}