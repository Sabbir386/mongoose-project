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
  return result;
};

const updateUserFromDb = async (userId: string) => {
  const update = { age: 45 };
  const result = await User.findOneAndUpdate({ userId }, update, {
    new: true,
  });
  return result;
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
};
