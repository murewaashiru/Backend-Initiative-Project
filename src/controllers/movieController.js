const Movies = require('../models/movies');
const { successResponse, errorResponse } = require( '../utils/response');

const createMovie = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Movies.create(data);    
    return successResponse(res, 201, 'Account created successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getMovies = async (req, res, next) => {
  try{
    const result = await Movies.find({});

    return successResponse(res, 200, 'Movies retrieved successfully', result);
  }catch(err){
    console.log(err)
    return next(err)
}
};

const getMovieById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Movies.findOne({_id:id});

    return successResponse(res, 200, `Movie ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const result = await Movies.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `Movie updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Movies.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'Movie does not exist or has been deleted'); 

    return successResponse(res, 200, `Movie deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createMovie, getMovies, getMovieById, updateMovie, deleteMovie
};
