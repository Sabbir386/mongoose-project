import { Model } from 'mongoose';

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order[];
  isDeleted?: boolean;
};
export type UserMethod = {
  isUserExists(id: number): Promise<IUser | null>;
};
export type UserModel = Model<IUser, Record<string, never>, UserMethod>;
