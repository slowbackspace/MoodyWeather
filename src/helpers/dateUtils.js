function format_two_digits(n) {
  return n < 10 ? '0' + n : n;
}

export const getTimeFromTimestamp = (timestamp) => {
  var date  = new Date(timestamp * 1000);
return format_two_digits(date.getHours()) + ":" + format_two_digits(date.getMinutes());
}