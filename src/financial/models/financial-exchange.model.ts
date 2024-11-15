import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FinancialModel } from './financial.model';
import { CourseExchangeModel } from './cyrrency-exchange.model';

@Table({ tableName: 'Exchange', timestamps: false })
export class ExchangeModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @ForeignKey(() => FinancialModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  sourceFinancialId!: number;

  @BelongsTo(() => FinancialModel, 'sourceFinancialId')
  sourceFinancial!: FinancialModel;

  @ForeignKey(() => FinancialModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  targetFinancialId!: number;

  @BelongsTo(() => FinancialModel, 'targetFinancialId')
  targetFinancial!: FinancialModel;

  @ForeignKey(() => CourseExchangeModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  exchangeRateId!: number;

  @BelongsTo(() => CourseExchangeModel, 'exchangeRateId')
  courseExchange!: CourseExchangeModel;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  upperLimit!: number;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  lowerLimit!: number;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  fee!: number;
}
