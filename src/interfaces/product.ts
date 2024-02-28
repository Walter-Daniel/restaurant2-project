export interface Category {
    _id: string;
    name: string;
  }
  
export interface Product {
    _id: string;
    name: string;
    detail: string;
    price: number;
    category: Category;
    active: boolean;
    promo: boolean;
  }
  
 export interface ProductsResponse {
    message: string;
    products: Product[];
    allProducts: Product[];
    total: number;
}