"use client";
import React, { useEffect, useState } from "react";
import useBookStore from "../store/book";
import AddBookForm from "./AddBookForm";
import { BookSchemaProps } from "../types/bookSchemaProps";
import { getBook, putBook } from "../server/book";

const BookList: React.FC = () => {
  const books = useBookStore((state) => state.books);
  const addBook = useBookStore((state) => state.addBook);
//   const deleteBook = useBookStore((state) => state.deleteBook);
  const updateBook = useBookStore((state) => state.updateBook);
  const [showAddBookForm, setShowAddBookForm] = useState<boolean>(false);
  const [editingBookId, setEditingBookId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editAuthor, setEditAuthor] = useState<string>("");
  const [editPrice, setEditPrice] = useState<number>(0);

  useEffect(() => {
    const fetchBooks = async () => {
      await getBook(); // מקבלת את הספרים
      // עדכון הסטור עם הספרים שהתקבלו
      // fetchedBooks.forEach((book: BookSchemaProps) => addBook(book)); 
    };
    fetchBooks();
  }, []);

  // Function to open the add book form
  const handleOpenForm = () => {
    setShowAddBookForm(true);
  };

  // Function to close the add book form
  const handleCloseForm = () => {
    setShowAddBookForm(false);
  };

  // Function to start editing a book
  const handleEditClick = (bookId: number, title: string | undefined, author: string | undefined, price: number | undefined) => {
    console.log("cj",bookId);
    
    setEditingBookId(bookId);
    setEditTitle(title || '');  // ברירת מחדל למחרוזת ריקה אם title הוא undefined
    setEditAuthor(author || '');  // ברירת מחדל למחרוזת ריקה אם author הוא undefined
    setEditPrice(price || 0);  // ברירת מחדל לאפס אם price הוא undefined
};

  // Function to save the edited book
  const handleSaveEdit = (bookId: string) => {
    const updatedBookData = {
      title: editTitle,
      author: editAuthor,
      price: editPrice,
    };
  
    console.log("id component",bookId);
    
    putBook(bookId, updatedBookData as BookSchemaProps);
    updateBook(updatedBookData);
    setEditingBookId(null);
    setEditTitle("");
    setEditAuthor("");
    setEditPrice(0);
  };

  // Function to delete a book
  const handleDeleteBook = (bookId: number) => {
    // deleteBook(bookId);
  };

  console.log("books",books);
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Book List</h2>
      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li
              key={book.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
            >
              {editingBookId === book.id ? (
                <div className="flex-1">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Enter book title"
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                    placeholder="Enter author name"
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(Number(e.target.value))}
                    placeholder="Enter book price"
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => handleSaveEdit(book.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingBookId(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <p className="text-gray-600">Author: {book.author}</p>
                    <p className="text-gray-600">Price: ₪{book.price}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        handleEditClick(book.id, book.title, book.author, book.price)
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleOpenForm}
        className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
      >
        Add New Book
      </button>

      {/* Modal for adding a new book */}
      {showAddBookForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <AddBookForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
