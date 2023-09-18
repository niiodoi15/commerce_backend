import { db } from '../db/db.js';
import userQueries from '../queries/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { createUser } = userQueries;

const createUserService = async (email, username, password) => {
    const saltRounds = 12;
    const hash = bcrypt.hashSync(password, saltRounds);
    return db.one(createUser, [email, username, hash]);
};

const loginService = (user, secret) => {
    console.log({ secret });
    return jwt.sign(user, secret);
};



export default {
    createUserService,
    loginService
    
};