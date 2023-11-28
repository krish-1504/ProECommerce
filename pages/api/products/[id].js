import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { getProduct} from '@/backend/controllers/productControllers';

dbConnect();

const router = createRouter()
router.get(getProduct);


export default router.handler();