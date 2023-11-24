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
export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
};
