export default {
    createUser: `
    INSERT INTO users(
        email,
        username,
        password
    ) VALUES ($1, $2, $3) RETURNING id, email, username
    `,

    findUserByEmail: `
    SELECT id, email, password FROM users WHERE email=$1
    `,
};