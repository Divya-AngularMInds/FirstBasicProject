import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../interfaces/interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: any = {};
  @Output() cartValue = new EventEmitter<Book>();
  @Output() childEvent = new EventEmitter();
  constructor(private cartService: CartService, private ls: BooksService, private route: Router) { }
  isInCart: boolean = false;

  ngOnInit(): void {
    this.book.count = 0;
  }
  total: number = 0;
  addToCart(price: any) {
    this.isInCart = true;
    this.total += 1;
    this.book.count += 1;
    if (this.book.count < 2) {
      this.cartService.add(this.book);

      this.childEvent.emit(this.cartService.cart.length);
    }
    this.ls.totalCart = this.ls.totalCart + price;
  }
  removeFromCart(price: any) {
    this.ls.totalCart = this.ls.totalCart - price;
    if (this.total === 1) this.isInCart = false;
    this.total -= 1;
    this.book.count -= 1;
    if (this.book.count === 0) {
      this.cartService.remove(this.book);
      this.childEvent.emit(this.cartService.cart.length);
    }



  }
  // remove(index:any) {
  //   this.cartService.cart.splice(index, 1);
  // }
  show() {
    this.ls.showBook = this.book
    this.route.navigate(['./page']);
  }

}
export function removeFromCart() { }