import { Document } from "mongoose";

export interface UserSchemaProps extends Document{
    name: string;
    email: string;
    password: string 
}