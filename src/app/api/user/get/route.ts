import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/user";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connect();
        // const data=await User.find();
        return NextResponse.json({message:"seccessfull get users"})
    }catch(error){
        return NextResponse.json({message:"error to get",error})
    }
}