export interface IAuthenticatedUser {
  name: string;
  token: string;  
}

export interface ILoginUser {
  email: string;
  password: string;
}
