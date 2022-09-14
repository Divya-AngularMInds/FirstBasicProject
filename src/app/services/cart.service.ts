import { Injectable } from '@angular/core';
import { Book } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = []; 
  totalCart = this.cart.length;
  // count: object = {};
  constructor() { }
  add(book: Book) {
    this.cart.push(book);
    console.log(book);
    
  }
  get() {
    
    return this.cart;
  }
  remove(book: Book) {
    let counter = 0;
    let index: number = 0;
    this.cart.filter((b) => {
      if (b == book && counter == 0) {
        this.cart.splice(index, 1);
        counter += 1;
      } 
      index += 1;
    });
    
  }
  
}
