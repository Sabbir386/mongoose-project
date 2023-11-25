import { User } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDb = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDb = async () => {
  const result = await User.find();
  return result;
};
const getSingleUsersFromDb = async (userId: string) => {
  const result = await User.findOne({
    userId,
  });
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const updateUserFromDb = async (
  //using mongoose _id
  userId: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const addUserOrdersFromDb = async (
  //using mongoose _id
  userId: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const retrieveallOrdersFromDb = async (userId: string) => {
  const orders = await User.findOne(
    {
      userId,
    },
    { orders: 1 },
  );
  if (!orders) {
    throw new Error('User not found');
  }
  return orders;
};

const calculateSpecificOrdersSumFromDb = async (userId: string) => {
  const user = await User.findOne({
    userId,
  });
  if (!user) {
    throw new Error('User not found');
  }
  const totalPrice = user.orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0,
  );
  return totalPrice;
};

const deleteUserFromDb = async (userId: string) => {
  const result = await User.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getSingleUsersFromDb,
  deleteUserFromDb,
  updateUserFromDb,
  addUserOrdersFromDb,
  retrieveallOrdersFromDb,
  calculateSpecificOrdersSumFromDb,
};
