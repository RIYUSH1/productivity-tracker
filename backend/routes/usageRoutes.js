import express from 'express';
import { addUsage, getUsage } from '../controllers/usageController.js';

const router = express.Router();

router.post('/', addUsage);
router.get('/', getUsage);

export default router;
