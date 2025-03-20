import { Component } from '@angular/core';
import { Category } from './models';
import { ProductListComponent } from './product-list/product-list.component'; 
import { Product } from './models';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      name: 'Clothes',
      products: [
        { id: 1, name: 'T-Shirt', description: 'Simple White T-Shirt', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/p65/19312794.jpeg?format=gallery-medium', likes: 0 },
        { id: 2, name: 'Socks', description: 'Brand Socks', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h7d/85751289708574.jpg?format=gallery-medium', likes: 0 },
        { id: 3, name: 'Pajama', description: 'Pajama for kids', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h1f/86902907830302.jpg?format=gallery-medium', likes: 0 },
        { id: 4, name: 'Coat', description: 'Base coat', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/ha3/85691775909918.jpg?format=gallery-medium', likes: 0 },
        { id: 5, name: 'Hoodie', description: 'Base hoodie', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p4e/p50/22786779.jpg?format=gallery-medium', likes: 0 }
      ]
    },
    {
      name: 'Pharmacy',
      products: [
        { id: 6, name: 'Citramon', description: 'Citramon', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h90/86581566636062.jpg?format=gallery-medium', likes: 0 },
        { id: 7, name: 'Vitamins D-3', description: 'D-3 Vitamins', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/hce/69165915701278.jpg?format=gallery-medium', likes: 0 },
        { id: 8, name: 'Vitamins Calcium', description: 'Vitamins Calcium', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hf6/87329812152350.jpg?format=gallery-medium', likes: 0 },
        { id: 9, name: 'Enterozhermina', description: 'Dibacteriuos', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p34/17407707.jpg?format=gallery-medium', likes: 0 },
        { id: 10, name: 'Alcohol 90%', description: 'Ethil', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/he8/85825480097822.png?format=gallery-medium', likes: 0 }
      ]
    },
    {
      name: 'Computers',
      products: [
        { id: 11, name: 'Ноутбук ThundeRobot', description: 'Game laptop',imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium', likes: 0 },
        { id: 12, name: 'Ноутбук Lenovo LOQ',description: 'Game Laptop', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium', likes: 0 },
        { id: 13, name: 'Ноутбук Apple MacBook Air 13 ', description: 'Apple Laptop', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', likes: 0 },
        { id: 14, name: 'Ноутбук Lenovo IdeaPad ', description: 'Office Laptop', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium', likes: 0 },
        { id: 15, name: 'Ноутбук ThundeRobot 911', description: 'Game Laptop', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium', likes: 0 }
      ]
    },
    {
      name: 'Beauty and Health',
      products: [
        { id: 16, name: 'Lashes', description: 'Lashes', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdb/18363782.jpg?format=gallery-medium', likes: 0 },
        { id: 17, name: 'Hair Spray', description: 'Hair spray brand', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium', likes: 0 },
        { id: 18, name: 'Toothpaste', description: 'Great toothpaste', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h91/86777093226526.jpg?format=gallery-medium', likes: 0 },
        { id: 19, name: 'Beauty Sponge', description: 'Pink sponge', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h67/64437574336542.jpg?format=gallery-medium', likes: 0 },
        { id: 20, name: 'Axis-Y essence', description: 'Dark Sport correcting creme', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium', likes: 0 }
      ]
    }
  ];
  selectedCategory: any = null;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }


 
  
}
