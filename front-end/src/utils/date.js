const initialYearPos = 0;
const yearPos = 4;
const initialMonthPos = 5;
const monthPos = 7;
const initialDayPos = 8;
const dayPos = 10;

const getDate = (date) => {
  const year = date.slice(initialYearPos, yearPos);
  const month = date.slice(initialMonthPos, monthPos);
  const day = date.slice(initialDayPos, dayPos);
  return (`${day}/${month}/${year}`);
};

module.exports = { getDate };
