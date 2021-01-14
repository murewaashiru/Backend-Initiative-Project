const Rentals = require('../models/rentals');
const { successResponse, errorResponse } = require( '../utils/response');

const createRental = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Rentals.create(data);    
    return successResponse(res, 201, 'Rental created successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getRental = async (req, res, next) => {
  try {
    const result = await Rentals.find({});

    return successResponse(res, 200, 'Rentals retrieved successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getRentalById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Rentals.findOne({_id:id});

    return successResponse(res, 200, `Rentals ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateRental = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const result = await Rentals.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `Rental updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteRental = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Rentals.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'Rental does not exist or has been deleted'); 

    return successResponse(res, 200, `Rental deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createRental, getRental, getRentalById, updateRental, deleteRental
};
