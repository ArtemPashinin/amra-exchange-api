interface IFinancialDto {
  financialName: string;
  amount: string | number;
}

interface ITgUserDto {
  userName: string;
  tgUserId: number;
}

export interface ICreateClaimDto {
  sourceFinancial: IFinancialDto;
  targetFinancial: IFinancialDto;
  user: ITgUserDto;
}
