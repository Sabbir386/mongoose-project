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

const updateUserFromDb = async (
  userId: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
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
