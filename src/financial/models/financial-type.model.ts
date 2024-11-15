import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { FinancialType } from '../enums/financial-types.enum';
import { FinancialModel } from './financial.model';

@Table({ tableName: 'FinancialType', timestamps: false })
export class FinancialTypeModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @NotNull
  @Column({ type: DataType.CHAR(32), allowNull: false })
  type!: FinancialType;

  @HasMany(() => FinancialModel)
  financials!: FinancialModel[];
}
