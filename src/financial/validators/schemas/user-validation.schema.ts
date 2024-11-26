import * as Joi from 'joi';

export const tgUserDtoSchema = Joi.object({
  userName: Joi.string().required(),
  tgUserId: Joi.alternatives()
    .try(Joi.number(), Joi.string().pattern(/^\d+(\.\d+)?$/))
    .required(),
});
