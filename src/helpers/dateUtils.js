function formatTwoDigits(n) {
  return n < 10 ? '0' + n : n;
}

export const getTimeFromTimestamp = (timestamp) => {
  var date  = new Date(timestamp * 1000);
return formatTwoDigits(date.getHours()) + ":" + formatTwoDigits(date.getMinutes());
}