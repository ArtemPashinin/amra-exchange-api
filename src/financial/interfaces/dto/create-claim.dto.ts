import { IFinancialDto } from './financial.dto';
import { ITgUserDto } from './user.dto';

export interface ICreateClaimDto {
  sourceFinancial: IFinancialDto;
  targetFinancial: IFinancialDto;
  user: ITgUserDto;
}
