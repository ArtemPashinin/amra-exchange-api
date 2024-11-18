import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Column,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'ranges', timestamps: false })
export class RangesModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  min!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  max!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  fee!: number;
}
