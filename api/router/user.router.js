import express from 'express';
import authenticationToken from '../middlewares/authenticationToken.js';
import userService from '../services/auth.service..js';

const router = express.Router();

router.get('/user', authenticationToken, async (req, res) => {
    try {
        const user = await userService.getUserById(req.user.id);
        res.json({ email: user.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;