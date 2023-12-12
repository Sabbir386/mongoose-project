import { Request, Response } from 'express';
import { UserServices } from './user.service';
import UserValidationSchema from './user.validation';
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    //validation using by zod

    const zodParseData = UserValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDb(zodParseData);

    res.status(201).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAlleUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDb();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getSingleUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.getSingleUsersFromDb(userId);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const userData = req.body;
    const result = await UserServices.updateUserFromDb(userId, userData);

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const addUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const userData = req.body;
    const result = await UserServices.addUserOrdersFromDb(userId, userData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const retrieveOrdersById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.retrieveallOrdersFromDb(userId);

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const calculateOrdersSum = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.calculateSpecificOrdersSumFromDb(userId);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const deleteDtudent = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.deleteUserFromDb(userId);

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User Not Found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAlleUsers,
  getSingleUserById,
  deleteDtudent,
  updateUserById,
  addUserOrders,
  retrieveOrdersById,
  calculateOrdersSum,
};
