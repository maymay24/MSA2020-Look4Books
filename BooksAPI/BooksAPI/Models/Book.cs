using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksAPI.Models
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int bookID { get; set; }
        [Required, MaxLength(150)]
        public string title { get; set; }
        public string author { get; set; }
        public string publishDate { get; set; }
    }
}
