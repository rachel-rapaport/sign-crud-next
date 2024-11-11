import axios from "axios";
import { BookSchemaProps } from "../types/bookSchemaProps";

export const creatBook=async(book:BookSchemaProps)=>{
    try{
        const response=await axios.post("http://localhost:3001/api/book/post",book);
        return response.data;
    }catch(error){
        console.error("Error creating user:", error);
        throw error
    }
}

export const putBook=async(id:string,book:BookSchemaProps)=>{
    try{
        console.log("id server",id);
        
        const response=await axios.put(`http://localhost:3001/api/book/post${id}`,book);
        return response.data;
    }catch(error){
        console.error("Error updateing user:", error);
        throw error
    }
}

export const getBook=async()=>{
    try{
        const response=await axios.get("http://localhost:3001/api/book/get");
        return response.data;
    }catch(error){
        console.error("Error creating user:", error);
        throw error
    }
}
