export interface IUser {
  userId: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  imageUrl: string | null;
  email: string;
  site: string;
  roles: string[];
}

export class User implements IUser {
  userId: string | null = null;
  firstName: string = '';
  lastName: string = '';
  site: string = '';
  phoneNumber: string | null = null;
  imageUrl: string | null = '';
  email: string = '';
  roles: string[] = [];
}

export interface IUserRegister extends IUser {
  password: string;
}

export class UserRegister implements IUserRegister {
  password: string = '';
  userName: string = '';
  userId: string | null = null;
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string | null = null;
  imageUrl: string | null = null;
  email: string = '';
  roles: string[] = [];
  site: string = '';
}

export interface IUserForLocalStorage {
  token: string,
  refreshToken: string
}

export class UserForLocalStorage implements IUserForLocalStorage {

  constructor(token: string, refresh: string) {
    this.token = token;
    this.refreshToken = refresh;
  }

  token: string = '';
  refreshToken: string = '';
}
