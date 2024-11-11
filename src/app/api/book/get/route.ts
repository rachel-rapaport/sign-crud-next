import connect from "@/app/lib/db/mongodb";
import Book from "@/app/lib/models/book";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connect();
        const books=await Book.find();
        console.log("books",books);
        
        return NextResponse.json({message:"seccessfull",books,status:200})
    }catch(error){
        return NextResponse.json({message:"error",error,status:500})
    }
}