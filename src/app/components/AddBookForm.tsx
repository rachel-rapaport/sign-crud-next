"use client";
import React, { useState } from "react";
import useBookStore from "../store/book";
import { BookSchemaProps } from "../types/bookSchemaProps";
import { creatBook } from "../server/book";

interface AddBookFormProps {
    onClose: () => void;
  }

const AddBookForm: React.FC<AddBookFormProps> = ( {onClose}) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const addBook = useBookStore((state) => state.addBook);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || price <= 0) {
      alert("plese enter correct input");
      return;
    }

    const newBook: Partial<BookSchemaProps> = {
      title,
      author,
      price,
    };

    creatBook(newBook as BookSchemaProps)
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setPrice(0);
    onClose();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">add new book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter title"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="author"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="price"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
            add book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
