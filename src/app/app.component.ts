import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstBasicProject';
  cartLength: number;
  value: any;
  constructor(private ls: CartService) {
    this.cartLength = this.ls.totalCart;
    
    
  }
  
}
