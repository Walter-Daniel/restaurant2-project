export interface Product {
    _id: string;
    name: string;
    detail: string;
  }
  
export interface User {
    _id: string;
    fullName: string;
    email: string;
    active: boolean;
    role: string;
    createdAt: string;
  }
  
export interface OrderProduct {
    productId: Product;
    quantity: number;
    _id: string;
  }
  
export interface Order {
    _id: string;
    products: OrderProduct[];
    user: User;
    total: number;
    status: string;
  }
  
 export interface OrdersResponse {
    ok: boolean;
    message: string;
    orders: Order[];
  }