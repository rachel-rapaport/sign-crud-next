import { create } from "zustand";
import { BookStore } from "../types/bookStore";
import { BookSchemaProps } from "../types/bookSchemaProps";

const useBookStore=create<BookStore>((set)=>({
    books:[],
    addBook:(book:Partial<BookSchemaProps>)=>
        set((state)=>({
            books:[...state.books,book]
        })),
    updateBook:(book:Partial<BookSchemaProps>)=>
        set((state)=>({
            books:state.books.map((b)=>
                book.id===b.id?{...b,...book}:b)
        }))
}))

export default useBookStore;