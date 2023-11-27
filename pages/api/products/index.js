import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { getProducts, newProduct } from '@/backend/controllers/productControllers';

dbConnect();

const router = createRouter()
router.get(getProducts);
router.post(newProduct);


export default router.handler();