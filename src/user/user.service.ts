import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './models/user.model';
import { ICreateUserDto } from './interfaces/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {}

  public async createAndUpdateOne(data: ICreateUserDto): Promise<UserModel> {
    const userData: any = {
      tg_user_id: data.tg_user_id,
      tg_username: data.tg_username,
      ...(data.tg_topic_id && { tg_topic_id: data.tg_topic_id }),
    };

    const [newUser] = await this.userModel.upsert(userData, {
      returning: true,
    });

    return newUser;
  }

  public async findOne(userId: number): Promise<UserModel> {
    return await this.userModel.findOne({ where: { tg_user_id: userId } });
  }

  public async findByTopicId(topicId: number): Promise<UserModel> {
    return await this.userModel.findOne({ where: { tg_topic_id: topicId } });
  }

  public async updateTopicId(userId: number, topicId: number) {
    const user = await this.findOne(userId);
    user.update({ tg_topic_id: topicId });
  }
}
