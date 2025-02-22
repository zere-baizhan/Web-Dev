import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot',
      description: 'Game laptop',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
      name: 'Ноутбук Lenovo LOQ',
      description: 'Game Laptop',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Ноутбук Apple MacBook Air 13 ',
      description: 'Apple Laptop',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      name: 'Ноутбук Lenovo IdeaPad ',
      description: 'Office Laptop',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot 911',
      description: 'Game Laptop',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      name: 'Ноутбук Acer Aspire 3',
      description: 'Office Laptop',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hd0/83606464462878.jpg?format=gallery-medium',
      name: 'Ноутбук ASUS TUF Gaming',
      description: 'Game Laptop',
      rating: 2.3,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-16-gb-ssd-512-gb-dos-fx507zc4-hn143-90nr0gw1-m00b40-113186739/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium',
      name: 'Ноутбук Acer Gadget',
      description: 'Home Laptop',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h67/84375762599966.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot Zero',
      description: 'Game Laptop',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/pb4/9286973.jpeg?format=gallery-medium',
      name: 'Ноутбук HYDRA H20',
      description: 'Home Laptop',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/hydra-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000'
    },
  ];

  shareProduct(product: Product, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=Check this product: ${product.link}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${product.link}&text=Check this product!`;
    }
    window.open(shareUrl, '_blank');
  }
}
