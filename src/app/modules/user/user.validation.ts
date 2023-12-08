import { z } from 'zod';

const AddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const OrderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string({
    required_error: 'User name is required',
  }),
  password: z.string().min(6),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number({ required_error: 'Age is required' }),
  email: z.string().email(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()).default([]),
  address: AddressValidationSchema,
  orders: z.array(OrderValidationSchema).default([]),
  isDeleted: z.boolean().optional(),
});

export default UserValidationSchema;
