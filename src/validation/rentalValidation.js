const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createRental = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      item: Format.string,
      borrowingDays: Format.number,
      vendor : Format.string,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateRental = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      item: Format.stringOptional,
      borrowingDays: Format.number,
      vendor : Format.stringOptional,
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createRental, updateRental}