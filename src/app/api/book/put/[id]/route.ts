import connect from "@/app/lib/db/mongodb";
import Book from "@/app/lib/models/book";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest,{ params }: { params: { id: string } }) {
    try{
        await connect();
        const { id } = params;
        const {title,author,price}=await request.json();
        const book=await Book.findById(id);
        console.log("id api",id);
        
        if(!book){
            return NextResponse.json({ message: "Book not found", status: 404 });
        }
        book.title = title || book.title;
        book.author = author || book.author;
        book.price = price || book.price;
        await book.save();
        return NextResponse.json({message:"Successfully updated",book,status:200})
    }catch(error){
        return NextResponse.json({ message: "Error updating book", error });
    }
}