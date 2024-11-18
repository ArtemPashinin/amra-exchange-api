import { Context } from 'grammy';

export function isMessageTopic(
  ctx: Context,
): ctx is Context & { message: { message_thread_id?: number } } {
  console.log(ctx);
  return ctx.message.message_thread_id !== undefined;
}

export function isMessageMainTopic(
  ctx: Context,
): ctx is Context & { message: { message_thread_id?: number } } {
  return !isMessageTopic(ctx);
}
