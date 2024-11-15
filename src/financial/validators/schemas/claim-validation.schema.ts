import * as Joi from 'joi';

const financialDtoSchema = Joi.object({
  financialName: Joi.string().required(),
  amount: Joi.alternatives()
    .try(Joi.number(), Joi.string().pattern(/^\d+(\.\d+)?$/))
    .required(),
});

const tgUserDtoSchema = Joi.object({
  userName: Joi.string().required(),
  tgUserId: Joi.alternatives()
    .try(Joi.number(), Joi.string().pattern(/^\d+(\.\d+)?$/))
    .required(),
});

export const claimValidationSchema = Joi.object({
  sourceFinancial: financialDtoSchema.required(),
  targetFinancial: financialDtoSchema.required(),
  user: tgUserDtoSchema.required(),
});
