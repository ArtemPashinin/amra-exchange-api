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
import { CourseExchangeModel } from './currency-exchange.model';

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
  @Column({ type: DataType.INTEGER, allowNull: true })
  targetFinancialId!: number;

  @BelongsTo(() => FinancialModel, 'targetFinancialId')
  targetFinancial!: FinancialModel;

  @ForeignKey(() => CourseExchangeModel)
  @Column({ type: DataType.INTEGER, allowNull: true })
  exchangeRateId!: number;

  @ForeignKey(() => CourseExchangeModel)
  @Column({ type: DataType.INTEGER, allowNull: true })
  displayedExchangeRateId!: number;

  @BelongsTo(() => CourseExchangeModel, 'displayedExchangeRateId')
  displayedCourseExchange!: CourseExchangeModel;

  @BelongsTo(() => CourseExchangeModel, 'exchangeRateId')
  courseExchange!: CourseExchangeModel;
}
