import { User } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDb = async (user: IUser) => {
  const result = await User.create(user);
  // eslint-disable-next-line no-unused-vars
  const { password, ...singleUserCreateWithoutPasswordField } =
    result.toObject();
  return singleUserCreateWithoutPasswordField;
};

const getAllUsersFromDb = async () => {
  const result = await User.aggregate([
    {
      $project: { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
    },
  ]);
  return result;
};
const getSingleUsersFromDb = async (userId: number) => {
  const user = new User();

  if (await user.isUserExists(userId)) {
    const result = await User.findOne({ userId });
    if (result) {
      const { password, ...userDataWithoutPassword } = result.toObject();
      return userDataWithoutPassword;
    }
  } else {
    throw new Error('User not found In Db');
  }
};

const updateUserFromDb = async (userId: number, data: object) => {
  const user = new User();

  if (await user.isUserExists(userId)) {
    const result = await User.findOneAndUpdate({ userId }, data, { new: true });
    if (result) {
      const { password, ...updateUserDataWithoutPassword } = result.toObject();
      return updateUserDataWithoutPassword;
    }
  } else {
    throw new Error('User not found');
  }
};

const addUserOrdersFromDb = async (userId: number, data: object) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const user = await User.findOne({ userId }, data);
    if (user) {
      const result = await User.updateOne(
        { userId },
        { $addToSet: { orders: data } },
      );
      return result;
    }
  } else {
    throw new Error('User not found');
  }
};

const retrieveallOrdersFromDb = async (userId: number) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const result = await User.aggregate([
      { $match: { userId: userId } },
      { $project: { orders: 1 } },
    ]);
    return result;
  } else {
    throw new Error('User not found');
  }
};

const calculateSpecificOrdersSumFromDb = async (userId: number) => {
  const user = new User();

  if (await user.isUserExists(userId)) {
    const result = await User.aggregate([
      { $match: { userId: userId } },
      {
        $project: {
          totalPrice: {
            $sum: {
              $map: {
                input: '$orders',
                as: 'userorder',
                in: {
                  $multiply: ['$$userorder.price', '$$userorder.quantity'],
                },
              },
            },
          },
        },
      },
    ]);

    const totalPrice = result.length > 0 ? result[0].totalPrice : 0;
    return { totalPrice };
  } else {
    throw new Error('User not found');
  }
};

const deleteUserFromDb = async (userId: number) => {
  const user = new User();
  if (await user.isUserExists(userId)) {
    const result = await User.updateOne({ userId }, { isDeleted: true });
    return result;
  } else {
    throw new Error('User not found');
  }
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
