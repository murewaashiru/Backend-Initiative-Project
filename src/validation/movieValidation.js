const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createMovie = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      name: Format.string,
      description: Format.string,
      genre : Format.string,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateMovie = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      name: Format.stringOptional,
      description: Format.stringOptional,
      genre : Format.stringOptional,
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createMovie, updateMovie}