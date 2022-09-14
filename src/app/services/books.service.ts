import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BooksService {
  totalCart: number = 0;
  showBook!: any;
  constructor() { }
  getBooks() {
    return [
      {
        name: 'Fire and Blood',
        author: 'George R R Martin',
        price: 400,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91iMu22uEWL.jpg',
        
        
      },
      {
        name: 'Gates of Stone: A Lord of Islands',
        author: 'Maccalan',
        price: 600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91qsBNiHVbL.jpg',
      
        
      },
      {
        name: 'Sisters of the Snake',
        author: 'Lord Vader',
        price: 800,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81c-L6B7zHS.jpg',
        
      },
      {
        name: `Boys Don't Cry`,
        author: 'Meghna Pant',
        price: 1200,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/61lyKm0SCtL.jpg',
        
      },
      {
        name: `Firekeeper`,
        author: 'Angeline Boulley',
        price: 1000,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91W+Oi2bDYS.jpg',
        
      },
      {
        name: `A Nation of Idiots `,
        author: 'Daksh Tyagi',
        price: 1400,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81KeOD++BBL.jpg',
        
      },
      {
        name: `Tongue-in-Cheek: The Funny Side of Life`,
        author: 'Khyrunnisa A',
        price: 1600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81anVXtS-5L.jpg',
        
      },
      {
        name: `Written in the Stars`,
        author: 'Sofa Ghop',
        price: 1600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51uwT1TLstL.jpg',
        
      }];
  }

}
