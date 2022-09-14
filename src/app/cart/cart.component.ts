import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BooksService } from '../services/books.service';
import { removeFromCart } from '../books/book/book.component';
import { Book } from '../interfaces/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @Input() book: Book = {} as Book;
  book: any;
  cartLength!: number
  constructor(private cartService: CartService, private ls: BooksService) { }
  totalValue!: number
  ngOnInit(): void {
    this.book = this.getCart();
    this.cartLength = this.cartService.cart.length;
  }


  getCart() {
    this.totalValue = this.ls.totalCart;
    return this.cartService.get();
  }
  // remove(i: any,book:any){
  //   this.ls.totalCart = this.ls.totalCart - this.book[i].singleBook.price * this.book[i].count;
  //   console.log(this.ls.totalCart);
  //   this.cartService.cart.splice(i, 1);
  //   this.cartLength = this.cartService.cart.length;
  //   this.getCart();
  // }
  remove(i: any, book: Book) {
    let counter = 0;
    let index: number = 0;
    this.book[i].count -= 1;
    this.ls.totalCart = this.ls.totalCart - this.book[i].singleBook.price;
    if (this.book[i].count === 0) {
      this.cartService.cart.filter((b) => {
        if (b == book && counter == 0) {
          this.cartService.cart.splice(i, 1);
          this.cartLength -= 1;
          // this.ls.totalCart = this.ls.totalCart - this.book[i].singleBook.price;
          counter += 1;
        }
        index += 1;
      })
    }
    ;

  }
}
