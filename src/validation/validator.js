  
require('joi');
const { errorResponse } = require( '../utils/response');

module.exports = async (schema, toValidate, res, next) => {
  const options = {
    errors: {
      wrap: {
        label: '',
      }
    },
    abortEarly: false,
    presence: 'required',
  }
  try {
    await schema.validateAsync(toValidate, options)
    next()
  } catch (error) {
    const errors = {};
    for (const item of error.details)
      errors[item.path[0]] = item.message;
    return errorResponse(res, 422, errors)
  }
}