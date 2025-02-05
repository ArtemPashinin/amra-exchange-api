import { DateTime } from 'luxon';

export const validateWorkTime = (): boolean => {
  const currentHours = DateTime.now().setZone('Asia/Dubai').hour;
  return currentHours >= 10 && currentHours < 19;
};
