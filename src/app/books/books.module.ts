import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../services/books.service';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule, routingComponents } from '../app-routing.modle';



@NgModule({
  declarations: [BooksComponent,BookComponent],
  providers: [BooksService,routingComponents], 
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [BooksComponent,BookComponent]
})
export class BooksModule { }

