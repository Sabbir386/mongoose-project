import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/users/', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('App is running');
};
app.get('/', getAController);

export default app;
