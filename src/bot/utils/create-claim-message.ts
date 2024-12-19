import { DateTime } from 'luxon';
import { ICreateClaimDto } from 'src/financial/interfaces/dto/create-claim.dto';
import { ICreateForeignClaimDto } from 'src/financial/interfaces/dto/create-foreign-claim.dto';

export function createClaimMessage(data: ICreateClaimDto): string {
  return `Заявка ${data.sourceFinancial.financialName} ➡️ ${data.targetFinancial.financialName}:
Сумма ${data.sourceFinancial.financialName}: ${data.sourceFinancial.amount}
Сумма ${data.targetFinancial.financialName}: ${data.targetFinancial.amount}
Время: ${DateTime.now().setZone('Asia/Dubai').toFormat('yyyy-MM-dd HH:mm')}`;
}

export function createForeignClaimMessage(
  data: ICreateForeignClaimDto,
): string {
  return `Заявка ${data.sourceFinancial.financialName} ➡️ ${data.targetFinancialName}
Сумма ${data.sourceFinancial.financialName}: ${data.sourceFinancial.amount}
Время ${DateTime.now().setZone('Asia/Dubai').toFormat('yyyy-MM-dd HH:mm')}`;
}
