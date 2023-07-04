export const getCurrentMonth = () => {
  const date = new Date();
  return {
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};
export const getPreviousMonth = ({ month, year }) => {
  if (month === 0) {
    return {
      month: 11,
      year: year - 1,
    };
  }
  return {
    month: month - 1,
    year,
  };
};

export const getNextMonth = ({ month, year }) => {
  if (month === 11) {
    return {
      month: 0,
      year: year + 1,
    };
  }
  return {
    month: month + 1,
    year,
  };
};

export const createOptions = (amount = 14) => {
  const res = [getCurrentMonth()];
  for (let i = 0; i < amount; i++) {
    res.push(getNextMonth(res[i]));
  }
  return res;
};

export const getFormattedYearMonth = ({ year, month }) =>
  new Intl.DateTimeFormat("he-IL", {
    year: "numeric",
    month: "long",
  }).format(new Date(year, month));
