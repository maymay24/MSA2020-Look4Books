using System;
using BooksAPI.Controllers;
using BooksAPI.Interfaces;
using BooksAPI.Models;
using Moq;
using NUnit.Framework;

namespace BooksAPI.Tests
{
    public class BookControllerUnitTest
    {
        [Test]
        public void GetBookWithTitle_ReturnsBookWithCorrectTitle()
        {
            //Arrange
            Book book = new Book
            {
                bookID = 1,
                title = "title 1",
                author = "author 1",
                publishDate = "0000"
            };

            var mockRepo = new Mock<IBookRepository>();
            mockRepo.Setup(c => c.GetBookByID(It.IsAny<int>())).Returns(book);
            mockRepo.Setup(c => c.GetBookTitle(It.IsAny<string>())).Returns("title 1");

            //Act
            var controller = new BookController(mockRepo.Object);
            var results = controller.GetBookWithTitle(book.bookID);

            //Assert
            Assert.IsNotNull(results);
            Assert.AreEqual("title 1", results.Value.ToString());
        }
    }
}
