import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.modle';
import { AppComponent } from './app.component';

import { BooksModule } from './books/books.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
