using System;
using System.Collections.Generic;
using BooksAPI.Models;

namespace BooksAPI.Interfaces
{
    public interface IBookRepository
    {
        IEnumerable<Book> GetAllBooks();
        Book GetBookByID(int bookID);
        void DeleteBook(int BookId);
        void UpdateBook(Book Book);
        public void Save();
        string GetBookTitle(string v);
    }
}
