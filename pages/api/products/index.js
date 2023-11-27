import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { newProduct } from '@/backend/controllers/productControllers';

dbConnect();

const router = createRouter()
router.post(newProduct);

export default router.handler();
