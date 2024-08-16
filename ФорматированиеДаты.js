function formatDate(date) {
  let currentDate = new Date();
  console.log(date);
  diff = currentDate - date;

  if (diff < 1000) {
    return `прямо сейчас`;
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return `${sec} сек. назад`;
  }

  let hour = Math.floor(diff / 60000);

  if (hour < 60) {
    return `${hour} мин. назад`;
  }

  let days =
    date.getDate() > 10 ? String(date.getDate()) : "0" + String(date.getDate());

  let months =
    date.getMonth() > 10
      ? String(date.getMonth())
      : "0" + String(date.getMonth());

  let hours =
    date.getHours() > 10
      ? String(date.getHours())
      : "0" + String(date.getHours());

  let minutes =
    date.getMinutes() > 10
      ? String(date.getMinutes())
      : "0" + String(date.getMinutes());

  return (
    days +
    "." +
    months +
    "." +
    String(date.getFullYear()).slice(2) +
    " " +
    hours +
    ":" +
    minutes
  );
}

console.log(formatDate(new Date(2022, 13, 18, 17, 14)));
