import { Context } from 'grammy';
import { UserStatus } from '../enums/user-status.enum';

export async function isUserHasPermissions(ctx: Context): Promise<boolean> {
  const author = await ctx.getAuthor();
  return (
    author.status === UserStatus.ADMINISTRATOR ||
    author.status === UserStatus.CREATOR
  );
}
