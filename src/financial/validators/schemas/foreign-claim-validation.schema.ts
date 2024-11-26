import * as Joi from 'joi';
import { tgUserDtoSchema } from './user-validation.schema';
import { financialDtoSchema } from './financial-validation.schema';

export const foreignClaimValidationSchema = Joi.object({
  sourceFinancial: financialDtoSchema.required(),
  targetFinancialName: Joi.string().required(),
  user: tgUserDtoSchema.required(),
});
