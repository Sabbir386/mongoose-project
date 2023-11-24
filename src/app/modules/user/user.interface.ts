import { Schema, model, connect } from 'mongoose';

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
  isActive: 'active | inActive';
  hobbies: [
    'reading',
    'writing',
    'drawing',
    'coding',
    'gardening',
    'playing music',
  ];
  address: Address;
  orders: Order[];
};
