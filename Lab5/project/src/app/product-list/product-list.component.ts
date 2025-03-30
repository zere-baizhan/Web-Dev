import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}