export interface DashboardResponse {
    ok:      boolean;
    message: string;
    data:    Data;
}

export interface Data {
    total:     Total;
    lastAdded: LastAdded;
}

export interface LastAdded {
    product:  Product;
    order:    Order;
    category: Category;
    user:     User;
}

export interface Category {
    _id:    string;
    name:   string;
    active: boolean;
}

export interface Order {
    _id:   string;
    user:  string;
    total: number;
}

export interface Product {
    _id:   string;
    name:  string;
    price: number;
}

export interface User {
    _id:      string;
    fullName: string;
    email:    string;
}

export interface Total {
    totalProducts:   number;
    totalOrders:     number;
    totalCategories: number;
    totalUsers:      number;
}
