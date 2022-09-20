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
        openSpot: 100

      },
      {
        name: 'Gates of Stone: A Lord of Islands',
        author: 'Maccalan',
        price: 600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91qsBNiHVbL.jpg',
        openSpot: 12

      },
      {
        name: 'Sisters of the Snake',
        author: 'Lord Vader',
        price: 800,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81c-L6B7zHS.jpg',
        openSpot: 10
      },
      {
        name: `Boys Don't Cry`,
        author: 'Meghna Pant',
        price: 1200,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/61lyKm0SCtL.jpg',
        openSpot: 199
      },
      {
        name: `Firekeeper`,
        author: 'Angeline Boulley',
        price: 1000,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91W+Oi2bDYS.jpg',
        openSpot: 10
      },
      {
        name: `A Nation of Idiots `,
        author: 'Daksh Tyagi',
        price: 1400,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81KeOD++BBL.jpg',
        openSpot: 0
      },
      {
        name: `Tongue-in-Cheek: The Funny Side of Life`,
        author: 'Khyrunnisa A',
        price: 1600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81anVXtS-5L.jpg',
        openSpot: 100
      },
      {
        name: `Written in the Stars`,
        author: 'Sofa Ghop',
        price: 1600,
        image: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51uwT1TLstL.jpg',
        openSpot: 100
      }];
  }

}
