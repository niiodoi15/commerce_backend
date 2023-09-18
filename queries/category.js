export default {
    createCategory: `
    INSERT INTO category(
        name,
    ) VALUES ($1) RETURNING id, name
    `,

    getAllCategory: `
    SELECT * FROM category
    `,

    getCategoryByName:`
    SELECT name FROM category WHERE name=$1
    `,
};