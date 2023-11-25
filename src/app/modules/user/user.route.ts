import express from 'express';
import { UserControllers } from './user.controller';
const router = express.Router();

router.post('/create-user', UserControllers.createUser);
router.get('/', UserControllers.getAlleUsers);
router.get('/:userId', UserControllers.getSingleUserById);
router.put('/:userId', UserControllers.updateUserById);
router.put('/:userId/orders', UserControllers.addUserOrders);
router.get('/:userId/orders', UserControllers.retrieveOrdersById);
router.get('/:userId/orders/total-price', UserControllers.calculateOrdersSum);
router.delete('/:userId', UserControllers.deleteDtudent);

export const UserRoutes = router;
