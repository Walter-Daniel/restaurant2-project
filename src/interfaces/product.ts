export interface Category {
  _id: string;
  name: string;
}

export interface Product {
    _id: string;
    name: string;
    detail: string;
    price: number;
    category: string;
    active: boolean;
    promo: boolean;
    image: string;
  }
  
 export interface ProductsResponse {
    message: string;
    products: Product[];
    totalProducts: number;
    totalPages: number;
}