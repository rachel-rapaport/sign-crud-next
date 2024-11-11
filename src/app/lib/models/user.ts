import { UserSchemaProps } from "@/app/types/userSchemaProps";
import mongoose, { Model, Schema } from "mongoose";

const UserSchema:Schema<UserSchemaProps> =new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const User:Model<UserSchemaProps>=mongoose.models.User||mongoose.model<UserSchemaProps>('User',UserSchema);

export default User;