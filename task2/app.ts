import { book } from '../book';
import { Library } from '../Library';
 
const library = new Library();
 
const book1 = new book("Book1","Fahim");
const book2 = new book("Book2","Hasim");
 
library.addBook(book1);
library.addBook(book2);
 
console.log(library.listBooks());
 
 