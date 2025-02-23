export interface Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    likes: number;
  
  }
  
  export interface Category {
    name: string;
    products: Product[];
  }
  