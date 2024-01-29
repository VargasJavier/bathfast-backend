import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config.js';
import userService from '../userService.js';

const register = async ({email, password}) => {
    const existingUser = await userService.getUserByEmail(email);

    if (existingUser) {
        throw new Error('El usuario no existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.createUser(email, hashedPassword);

    const token = jwt.sign({ id: newUser.id }, config.secretKey);

    return token;
}