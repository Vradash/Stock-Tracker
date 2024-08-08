import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vikram@123',
    database: 'stocktrackerdb'
});

export default db;