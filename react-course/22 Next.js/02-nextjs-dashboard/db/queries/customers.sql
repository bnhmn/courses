/* https://pgtyped.dev/docs/sql-file */
/* @name FindAllCustomers  */
SELECT id,
    name
FROM customers
ORDER BY name ASC;

/* @name SearchCustomers */
SELECT customer.id,
    customer.name,
    customer.email,
    customer.image_url,
    COUNT(invoice.id)::int AS "total_invoices!",
    SUM(
        CASE
            WHEN invoice.status = 'pending' THEN invoice.amount
            ELSE 0
        END
    )::int AS "total_pending!",
    SUM(
        CASE
            WHEN invoice.status = 'paid' THEN invoice.amount
            ELSE 0
        END
    )::int AS "total_paid!"
FROM customers customer
    LEFT JOIN invoices invoice ON customer.id = invoice.customer_id
WHERE customer.name ILIKE '%' || :query || '%'
    OR customer.email ILIKE '%' || :query || '%'
GROUP BY customer.id,
    customer.name,
    customer.email,
    customer.image_url
ORDER BY customer.name ASC;
