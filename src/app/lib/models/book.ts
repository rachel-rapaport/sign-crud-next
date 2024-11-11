import { BookSchemaProps } from "@/app/types/bookSchemaProps";
import mongoose, { Model, Schema } from "mongoose";

const BookSchema:Schema<BookSchemaProps>=new Schema({
    title: {type:String,required:true},
    author: {type:String,required:true},
    price: {type:Number,required:true} 
})

const Book: Model<BookSchemaProps> =mongoose.models.Book||mongoose.model<BookSchemaProps>('Book',BookSchema);

export default Book;
