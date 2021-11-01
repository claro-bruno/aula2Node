import { Router } from 'express';
import { categoriesRoutes } from './categories.router';
import { specificationsRouter } from './specifications.routes';
const router = Router();


router.use('/categories',categoriesRoutes);
router.use('/specifications', specificationsRouter);

export { router };