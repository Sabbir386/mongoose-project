import { model, Schema } from 'mongoose';
import { Address, IUser, Order } from './user/user.interface';
const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: ['active', 'inActive'],
  hobbies: [
    'reading',
    'writing',
    'drawing',
    'coding',
    'gardening',
    'playing music',
  ],
  address: addressSchema,
  orders: [orderSchema],
});

export const User = model<IUser>('User', userSchema);
