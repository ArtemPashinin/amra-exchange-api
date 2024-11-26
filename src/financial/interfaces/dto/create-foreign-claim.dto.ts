import { IFinancialDto } from './financial.dto';
import { ITgUserDto } from './user.dto';

export interface ICreateForeignClaimDto {
  sourceFinancial: IFinancialDto;
  targetFinancialName: string;
  user: ITgUserDto;
}
