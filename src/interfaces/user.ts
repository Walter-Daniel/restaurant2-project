export interface User {
    _id: string;
    fullName: string;
    email: string;
    active: boolean;
    role: string;
    createdAt: string;
}
  
export interface UsersResponse {
    ok: boolean;
    message: string;
    users: User[];
    total: number;
}