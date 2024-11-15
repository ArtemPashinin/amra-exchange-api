import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FinancialModel } from './financial.model';

@Table({ tableName: 'Currency', timestamps: false })
export class CurrencyModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @NotNull
  @Column({ type: DataType.CHAR(128), allowNull: false })
  name!: string;

  @NotNull
  @Column({ type: DataType.CHAR(4), allowNull: false })
  code!: string;

  @HasMany(() => FinancialModel)
  financials!: FinancialModel[];
}
