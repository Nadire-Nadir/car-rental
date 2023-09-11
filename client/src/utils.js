export const formatDate = (newDate) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  const date = new Date(newDate);

  const dayOfWeek = weekdays[date.getDay()];
  const monthName = months[date.getMonth()];

  const year = date.getFullYear();
  // const month = date.getMonth() + 1; // Add 1 since months are zero-based
  const day = date.getDate();

  return `${dayOfWeek}, ${monthName} ${day}, ${year}`;
};

export const differenceInDays = (startDate, endDate) => {
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const timeDifference = dateEnd.getTime() - dateStart.getTime();

  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysDifference;
};
