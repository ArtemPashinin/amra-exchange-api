import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Column,
  DataType,
  Unique,
  AllowNull,
} from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: false })
export class UserModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ type: DataType.INTEGER, allowNull: false })
  id!: null;

  @NotNull
  @Unique
  @Column({ type: DataType.BIGINT, allowNull: false })
  tg_user_id!: number;

  @AllowNull
  @Column({ type: DataType.BIGINT, allowNull: true })
  tg_topic_id!: number | null;

  @NotNull
  @Column({ type: DataType.STRING, allowNull: false })
  tg_username!: string;
}
