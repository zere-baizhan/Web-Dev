import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  likes: number;
}

@Component({
  selector: 'app-product-item',
  imports:[CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}