import connect from "@/app/lib/db/mongodb";
import Book from "@/app/lib/models/book";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request:NextRequest){
    try{ 
        await connect();
        const {title,author,price}=await request.json();
        const newBook=new Book({title,author,price});
        await newBook.save();
        return NextResponse.json({message:"seccessfull",Book:newBook,status:201});
    }catch(error){
        return NextResponse.json({ massage:"error to get", error});
    }
}