export const handleShippingDate = (): string => {
  const currentDate = new Date();

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Add a random number of days between 4 and 7 to the current date
  currentDate.setDate(currentDate.getDate() + getRandomInt(4, 7));

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const dayOfWeek = currentDate.toLocaleString("default", { weekday: "long" });

  // Return the formatted date string
  return `${dayOfWeek}, ${month} ${day}`;
};
