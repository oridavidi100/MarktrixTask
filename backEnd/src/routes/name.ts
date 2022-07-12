import express from 'express';
import { setResults } from '../controllers/probability';
const router = express.Router();

router.use('/', setResults);

export default router;
