export interface CategoryResponse {
    ok:         boolean;
    message:    string;
    categories: Category[];
}

export interface Category {
    _id:       string;
    name:      string;
    active:    boolean;
    user:      User;
    createdAt: Date;
}

export interface User {
    _id: string;
}
