import { Router } from 'express';
import paypalAuthRouter from './paypal/paypalAuthRouter.js';

const authRouter = Router();

authRouter.use('/paypal', paypalAuthRouter)

export default authRouter;