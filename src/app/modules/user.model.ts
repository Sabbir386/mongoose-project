import { model, Schema } from 'mongoose';
import {
  Address,
  IUser,
  Order,
  UserMethod,
  UserModel,
} from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';
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

const userSchema = new Schema<IUser, UserModel, UserMethod>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
    default: [],
  },
  address: { type: addressSchema, required: true },
  orders: { type: [orderSchema] },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//pre hook middleware

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
userSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
userSchema.post('findOne', function (doc, next) {
  doc.password = '';
  next();
});
userSchema.methods.isUserExists = async function (userId: number) {
  const exisUser = User.findOne({ userId });
  return exisUser;
};
export const User = model<IUser, UserModel>('User', userSchema);
