import { BookSchemaProps } from "./bookSchemaProps";

export interface BookStore{
    books: Array<Partial<BookSchemaProps>>,
    addBook:(book:Partial<BookSchemaProps>)=>void;
    updateBook:(book:Partial<BookSchemaProps>)=>void;
}