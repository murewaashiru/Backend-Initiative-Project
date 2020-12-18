let movieData = require('../database/movies.json');

const createMovie = async (req, res, next) => {
  try {
    let index = movieData.length;
    const { name, description, genre} = req.body;
    if (!name && !description && !genre) 
      return res.send("You must supply for the following: 'name', 'description' and 'genre'");

    var newMovie = {
      "id": index + 1,
      name,
      description,
      description,
      genre      
    }

    movieData.push(newMovie);
    res.status(200).json({message:"Movie created successfully", movieData});
  } catch (err) {
    return next(err);
  }
};

const getMovies = (req, res, next) => {
  try {
    return res.status(200).json({message:"Movies retrieved successfully", movieData});
  } catch (err) {
    return next(err);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > movieData.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

    for (var i = 0; i < movieData.length; i++) {
      if(movieData[i].id == id){
          return res.status(200).json({message:`Movie ${req.params.id} retrieved successfully`, movieData:movieData[i] });
      }
    }
  } catch (err) {
    return next(err);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const {id}= req.params;
    const { name, description, genre} = req.body;

    if (id > movieData.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

    if (!name || !description || !genre) 
    return res.send("You must supply for the following: 'name', 'description' or 'genre'");

    for (var i = 0; i < movieData.length; i++) {
        if(movieData[i].id == id){
          movieData[i].name = name;
          movieData[i].description = description;
            movieData[i].genre = genre;
        }
    }

    return res.status(200).json({message:"Movie updated successfully", movieData});
  } catch (err) {
    return next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const {id}= req.params;
    if (id > movieData.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

    for (var i = 0; i < movieData.length; i++) {
      if(movieData[i].id == id){
        movieData.splice(i, 1);
        return res.status(200).json({message:"Movie deleted successfully", movieData});
      }
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
    createMovie, getMovies, getMovieById, updateMovie, deleteMovie
};
