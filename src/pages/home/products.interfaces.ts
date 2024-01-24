export interface Welcome {
    message:     string;
    products:    Product[];
    allProducts: Product[];
    total:       number;
}

export interface Product {
    _id:       string;
    name:      string;
    detail:    string;
    price:     number;
    category:  Category;
    active:    boolean;
    promo:     boolean;
    createdAt: Date;
    __v:       number;
}

export interface Category {
    _id:  string;
    name: string;
}
