
const { query } = require('../config/db')


const getAllUsersService = async () => {
    const result = await query("SELECT * FROM USERS")
    return result.rows;
}

const getUserByIdService = async (id) => {
    const result = await query("SELECT * FROM USERS WHERE id = $1", [id])
    return result.rows[0];
}

const createUserService = async (name, email) => {
    const result = await query("INSERT INTO USERS (name, email) VALUES ($1, $2) RETURNING *", [name, email])
    return result.rows[0];
}

const updateUserService = async (id, name, email) => {
    const result = await query("UPDATE USERS SET name=$1, email=$2 WHERE id=$3 RETURNING *", [name, email, id])
    return result.rows[0];
}

const deleteUserService = async (id) => {
    const result = await query("DELETE FROM USERS WHERE id=$1 RETURNING *", [id])
    return result.rows[0];
}

module.exports = {
    getAllUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService,
}