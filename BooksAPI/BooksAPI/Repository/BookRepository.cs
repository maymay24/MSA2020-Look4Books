using System;
using System.Collections.Generic;
using System.Linq;
using BooksAPI.Data;
using BooksAPI.Interfaces;
using BooksAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksAPI.Repository
{
    public class BookRepository : IBookRepository
    {
        private BookContext _context;
        public BookRepository(BookContext context)
        {
            _context = context;
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _context.Book.ToList();
        }
        public Book GetBookByID(int bookID)
        {
            return _context.Book.Find(bookID);
        }

        public void InsertBook(Book book)
        {
            _context.Book.Add(book);
        }

        public void DeleteBook(int bookID)
        {
            Book book = _context.Book.Find(bookID);
            _context.Book.Remove(book);
        }

        public void UpdateBook(Book Book)
        {
            _context.Entry(Book).State = EntityState.Modified;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public string GetBookTitle(string title)
        {
            var result = _context.Book.FirstOrDefault(c => c.title.Contains(title));
            return result.title;
        }
    }
}
