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
  @Column({type: DataType.CHAR(16), allowNull: false})
  type!: string;

  @NotNull
  @ForeignKey(() => CurrencyModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  currencyId!: number;

  @BelongsTo(() => CurrencyModel)
  currency!: CurrencyModel;
}
