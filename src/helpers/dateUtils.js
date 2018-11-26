import { formatToTimeZone } from "date-fns-timezone";

export const getTimeFromTimestamp = (timestamp, timezone) => {
  const date = new Date(timestamp * 1000);
  try {
    const output = formatToTimeZone(date, "HH:mm", { timeZone: timezone });
    return output;
  } catch (error) {
    console.log(error);
    const output = formatToTimeZone(date, "HH:mm", {timeZone: "Europe/Prague", convertTimeZone: false});
    return output;
  }
};
