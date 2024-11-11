import { create } from "zustand";
import { UserStore } from "../types/userStore";
import { UserSchemaProps } from "../types/userSchemaProps";

const useUserStore=create<UserStore>((set)=>({
    curentUser:{},
    addUser:(user: Partial<UserSchemaProps>)=>
        set((state) => ({ ...state, currentUser: user }))
  
}))

export default useUserStore;