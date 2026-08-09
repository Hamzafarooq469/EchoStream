
const { query } = require("../config/db")

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS USERS (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;
    try {
        await query(queryText);
        console.log("User table created if not exists")
    } catch (error) {
        console.log('Error creating user table:', error)
    }
}

module.exports = {
    createUserTable
}