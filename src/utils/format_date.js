import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format('MM月DD日')
}

export const calculateDays = (date1, date2) => {
  const times = date2.getTime() - date1.getTime();
  return times/(1000*60*60*24);
}

