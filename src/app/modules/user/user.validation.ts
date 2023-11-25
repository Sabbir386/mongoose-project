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
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.enum(['active', 'inActive']),
  hobbies: z.array(z.string()),
  address: AddressValidationSchema,
  orders: z.array(OrderValidationSchema),
  isDeleted: z.boolean().optional(),
});

export default UserValidationSchema;
