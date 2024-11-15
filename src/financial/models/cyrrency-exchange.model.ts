import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotNull,
  PrimaryKey,
  Table,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { CurrencyModel } from './currency.model';

@Table({ tableName: 'CourseExchange', timestamps: false })
export class CourseExchangeModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @ForeignKey(() => CurrencyModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  firstCurrencyId!: number;

  @BelongsTo(() => CurrencyModel, 'firstCurrencyId')
  firstCurrency!: CurrencyModel;

  @ForeignKey(() => CurrencyModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  secondCurrencyId!: number;

  @BelongsTo(() => CurrencyModel, 'secondCurrencyId')
  secondCurrency!: CurrencyModel;

  @Default(0.0)
  @Column({ type: DataType.DECIMAL(10, 4), allowNull: false })
  exchangeRate!: number;
}
