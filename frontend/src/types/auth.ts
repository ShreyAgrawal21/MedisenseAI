export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  full_name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
    full_name: string;
    email: string;
}

export interface User {
  id: number;
  full_name: string;
  email: string;
}