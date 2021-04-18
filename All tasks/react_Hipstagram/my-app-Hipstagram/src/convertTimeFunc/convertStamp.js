export function timeConverter(UNIX_timestamp) {
  let fixStamp = [...UNIX_timestamp];
  fixStamp.length = 10;
  const a = new Date(Number(fixStamp.join("")) * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  //   const hour = a.getHours();
  //   const min = a.getMinutes();
  //   const sec = a.getSeconds();
  const time = date + " " + month + " " + year; //+ " " + hour + ":" + min + ":" + sec;
  return time;
}
