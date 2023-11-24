import express, { Application } from 'express';

import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoutes);

export default app;
