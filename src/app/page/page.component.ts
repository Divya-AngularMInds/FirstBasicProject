import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/interface';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  // @Input() book: any;
  book: any;
  constructor(private bookService: BooksService) { }
  // book: Book[] = [];
  ngOnInit(): void {
    console.log(this.bookService.showBook)
    this.book = this.bookService.showBook;
    // book:any = this.bookService.getBooks
    // const books = this.bookService.getBooks();

    // this.book = books[this.bookService.showBook];
    console.log(this.book);

  }

}
