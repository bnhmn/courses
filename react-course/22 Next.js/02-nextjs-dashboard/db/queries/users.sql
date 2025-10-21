/* https://pgtyped.dev/docs/sql-file */
/* @name FindUserByEmail */
SELECT *
FROM users
WHERE email = :email !;
