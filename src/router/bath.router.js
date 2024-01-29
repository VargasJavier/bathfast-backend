import express from 'express';
import BathController from '../controllers/bath.controller.js';

const router = express.Router();

router.get('/', BathController.getAll);

router.get('/:id', BathController.getOne);

router.post('/', BathController.create);

router.patch('/:id', BathController.updateBath);

router.delete('/:id', BathController.deleteBath);

export default router;