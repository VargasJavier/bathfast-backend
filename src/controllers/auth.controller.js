import authService from '../services/auth.js';

const register = async (req, res) => {
    try {
        const token = await authService.register(req.body);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export default { register, login };