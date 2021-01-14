const Joi = require('joi');

module.exports= {
 email: Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: true },
  })
  .trim()
  .required(),
  emailOptional: Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: true },
  })
  .trim()
  .optional(),
  string: Joi.string().trim().min(1).required(),
  stringOptional: Joi.string().trim().min(1).optional(),
  number: Joi.number().min(0),
  numberOptional: Joi.number().min(0).optional(),
};
