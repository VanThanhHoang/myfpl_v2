import {HourAndMinute} from '../types/HourAndMinute';

export const convertHourAndMinuesToString = (time: HourAndMinute) => {
  let minute = time.minute.toString();
  if (time.minute == 0) {
    minute = '00';
  }
  return time.hour + ':' + minute;
};
