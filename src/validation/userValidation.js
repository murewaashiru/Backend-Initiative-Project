const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createUser = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      username: Format.string,
      email: Format.email,
      password : Format.string,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateUser = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      username: Format.stringOptional,
      email: Format.stringOptional,
      password : Format.stringOptional,
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createUser, updateUser}