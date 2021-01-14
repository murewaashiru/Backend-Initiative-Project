const Users = require('../models/users');
const { successResponse, errorResponse } = require( '../utils/response');

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const {username, email }= req.body;
    const user = await Users.findOne({username, email});
    if (user) return errorResponse(res, 409, 'User already exists'); 


    const result = await Users.create(data);    
    return successResponse(res, 201, 'Users created successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await Users.find({});

    return successResponse(res, 200, 'Users retrieved successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Users.findOne({_id:id});

    return successResponse(res, 200, `Users ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const {username, email }= req.body;

    // Check if the details already exist for another user
    const user = await Users.findOne({username, email});
    if (user && user._id != id) return errorResponse(res, 409, 'Email or username already taken'); 

    const result = await Users.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `User updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Users.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'User does not exist or has been deleted'); 

    return successResponse(res, 200, `User deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createUser, getUser, getUserById, updateUser, deleteUser
};
