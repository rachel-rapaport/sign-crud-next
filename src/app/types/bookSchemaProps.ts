import { Document } from "mongoose";

export interface BookSchemaProps extends Document{
    title: string;
    author: string;
    price: number 
}