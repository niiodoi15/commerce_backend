export default {
    createProducts: `
    INSERT INTO products(
        name,
        price,
        quantity,
        category_id
    ) VALUES ($1, $2, $3, $4) RETURNING id, name, price, quantity, category_id
    `,

    getProducts: `
    SELECT
    p.id,
    p.name,
    p.price,
    p.quantity_sold,
    p.quantity,
    p.category_id,
    json_build_object(
        'id', c.id,
        'name', c.name,
        'created_at', c.created_at
    ) as product
    FROM
        products p 
    INNER JOIN
        category c ON p.category_id = c.id
    `,

    getProductsByCategory: `
    SELECT
    p.name AS product,
    p.price,
    p.quantity,
    p.quantity_sold,
    category.name AS category
    FROM
        products p
    INNER JOIN
        category c
    ON
        p.category_id = c.id
    WHERE
        p.category_id = $1
    `

};