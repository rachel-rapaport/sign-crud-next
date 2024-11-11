import axios from "axios"
import { UserSchemaProps } from "../types/userSchemaProps";

export const creatUser = async(user: UserSchemaProps)=>{
    try{
        const response = await axios.post("http://localhost:3001/api/user/post",user);
        return response.data;
    }catch(error){
        console.error("Error creating user:", error);
        throw error
    }
}

export const signInUser = async (user: UserSchemaProps) => {
    try {
        const response = await axios.post("http://localhost:3001/api/user/post/postSignIn", user);
        console.log("Response:", response.data); // להדפיס את התשובה
        return response.data;
    } catch (error) {
        console.error("Error signing in user:", error);
        if (axios.isAxiosError(error) && error.response) {
            console.error("Error response:", error.response.data);
        }
        return error;
    }
}