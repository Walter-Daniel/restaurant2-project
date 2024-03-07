  
export interface Product {
    _id: string;
    name: string;
    detail: string;
    price: number;
    category: string;
    active: boolean;
    promo: boolean;
  }
  
 export interface ProductsResponse {
    message: string;
    products: Product[];
    allProducts: Product[];
    total: number;
}