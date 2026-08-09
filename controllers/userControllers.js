const {
    createUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService,
} = require("../models/userModel");

const handlerResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    })
}

const CreateUser = async (req, res, next) => {
    const {name, email} = req.body;
    try {
        const newUser = await createUserService(name, email)
        handlerResponse(res, 201, "User created successfully", newUser)
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService()
        handlerResponse(res, 200, "Users fetched successfully", users)
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id)
        if (!user) return handlerResponse(res, 404, "User not found")
        handlerResponse(res, 200, "User fetched successfully", user)
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    const {name, email} = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id, name, email)
        if (!updatedUser) return handlerResponse(res, 404, "User not found")
        handlerResponse(res, 200, "User updated successfully", updatedUser)
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id)
        if (!deletedUser) return handlerResponse(res, 404, "User not found")
        handlerResponse(res, 200, "User deleted successfully", deletedUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    CreateUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}





