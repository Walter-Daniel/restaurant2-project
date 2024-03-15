export interface PromoResponse {
    message:            string;
    promoProducts:      PromoProduct[];
    totalPromoProducts: number;
    totalPages:         number;
}

export interface PromoProduct {
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
