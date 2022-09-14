import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../interfaces/interface';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService,
    private cartService: CartService) { }
  books: Book[] = [];
  isShowing: boolean = true;
  cartLength!: number
  @Output() childEvent = new EventEmitter();


  ngOnInit(): void {
    
    this.cartLength = this.cartService.cart.length;
    this.books = this.booksService.getBooks();
  }


}
