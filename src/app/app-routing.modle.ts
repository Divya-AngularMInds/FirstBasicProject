import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { BooksComponent } from "./books/books/books.component";
import { CartComponent } from "./cart/cart.component";
import { PageComponent } from "./page/page.component";

const routes: Routes = [
    {path : '', component:BooksComponent},
    { path: 'cart', component: CartComponent },
    { path: "page", component: PageComponent },
    { path: 'books', component: BooksComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents: any = [CartComponent];