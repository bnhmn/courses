/* https://pgtyped.dev/docs/sql-file */
/* @name FindAllInvoicesByAmount */
SELECT invoice.id,
    invoice.amount,
    customer.name,
    customer.email,
    customer.image_url
FROM invoices invoice
    JOIN customers customer ON invoice.customer_id = customer.id
WHERE invoice.amount = :amount !;

/* @name FindLatestInvoices */
SELECT invoice.id,
    invoice.amount,
    customer.name,
    customer.email,
    customer.image_url
FROM invoices invoice
    JOIN customers customer ON invoice.customer_id = customer.id
ORDER BY invoice.date DESC
LIMIT 5;

/* @name FindInvoiceStats */
SELECT (
        SELECT COUNT(*)::int
        FROM customers
    ) AS "numCustomers!",
    COUNT(*)::int AS "numInvoices!",
    SUM(
        CASE
            WHEN status = 'paid' THEN amount
            ELSE 0
        END
    )::int AS "paidAmount!",
    SUM(
        CASE
            WHEN status = 'pending' THEN amount
            ELSE 0
        END
    )::int AS "pendingAmount!"
FROM invoices;

/* @name SearchInvoices */
SELECT invoices.id,
    invoices.customer_id,
    invoices.amount,
    invoices.date,
    invoices.status,
    customers.name,
    customers.email,
    customers.image_url
FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
WHERE customers.name ILIKE '%' || :query || '%'
    OR customers.email ILIKE '%' || :query || '%'
    OR invoices.amount::text ILIKE '%' || :query || '%'
    OR invoices.date::text ILIKE '%' || :query || '%'
    OR invoices.status ILIKE '%' || :query || '%'
ORDER BY invoices.date DESC
LIMIT :limit OFFSET :offset;

/* @name CountInvoices */
SELECT COUNT(*)
FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
WHERE customers.name ILIKE '%' || :query || '%'
    OR customers.email ILIKE '%' || :query || '%'
    OR invoices.amount::text ILIKE '%' || :query || '%'
    OR invoices.date::text ILIKE '%' || :query || '%'
    OR invoices.status ILIKE '%' || :query || '%';

/* @name FindInvoiceById */
SELECT invoices.id,
    invoices.customer_id,
    invoices.amount,
    invoices.status
FROM invoices
WHERE invoices.id = :id !;

/* @name CreateInvoice */
INSERT INTO invoices (customer_id, amount, status, date)
VALUES (
        :customer_id !,
        :amount_in_cents !,
        :status !,
        :date !
    );

/* @name UpdateInvoice */
UPDATE invoices
SET customer_id = :customer_id !,
    amount = :amount_in_cents !,
    status = :status !
WHERE id = :id !;

/* @name DeleteInvoice */
DELETE FROM invoices
WHERE id = :id !;
