import * as Joi from 'joi';
import { tgUserDtoSchema } from './user-validation.schema';
import { financialDtoSchema } from './financial-validation.schema';

export const claimValidationSchema = Joi.object({
  sourceFinancial: financialDtoSchema.required(),
  targetFinancial: financialDtoSchema.required(),
  user: tgUserDtoSchema.required(),
});
