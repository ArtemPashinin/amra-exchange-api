import * as Joi from 'joi';

export const financialDtoSchema = Joi.object({
  financialName: Joi.string().required(),
  amount: Joi.alternatives()
    .try(Joi.number(), Joi.string().pattern(/^\d+(\.\d+)?$/))
    .required(),
});
