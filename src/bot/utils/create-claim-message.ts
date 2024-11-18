import { ICreateClaimDto } from 'src/financial/interfaces/dto/create-claim.dto';

export function createClaimMessage(data: ICreateClaimDto): string {
  return `Заявка ${data.sourceFinancial.financialName} ➡️ ${data.targetFinancial.financialName}:
Сумма ${data.sourceFinancial.financialName}: ${data.sourceFinancial.amount}
Сумма ${data.targetFinancial.financialName}: ${data.targetFinancial.amount}
Время: ${new Date()}`;
}
