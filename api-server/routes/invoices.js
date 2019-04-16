const express = require('express');
const router = express.Router();
import { get, getAllDetails } from '../controllers/invoices';

router.get('/', get);

router.get('/:id', getAllDetails);

export default router;
