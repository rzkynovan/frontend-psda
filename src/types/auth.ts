export interface User {
  id: number;
  username: string;
  email: string;
  is_admin: boolean;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  email: string;
}
