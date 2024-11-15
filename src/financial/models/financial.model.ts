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
import { CurrencyModel } from './currency.model';
import { FinancialTypeModel } from './financial-type.model';

@Table({ tableName: 'Financial', timestamps: false })
export class FinancialModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @NotNull
  @Column({ type: DataType.CHAR(128), allowNull: false })
  name!: string;

  @Column({ type: DataType.CHAR(36), allowNull: false })
  currencyName!: string;

  @NotNull
  @ForeignKey(() => CurrencyModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  currencyId!: number;

  @NotNull
  @ForeignKey(() => FinancialTypeModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  financialTypeId!: number;

  @BelongsTo(() => CurrencyModel)
  currency!: CurrencyModel;

  @BelongsTo(() => FinancialTypeModel)
  type!: FinancialTypeModel;
}
