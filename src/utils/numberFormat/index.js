export const getFormattedNumberUSD = number => {
  if (number === '') {
    return 0;
  }
  return Number.parseInt(number).toLocaleString('en-US');
};

export const getFormattedNumberRP = number => {
  if (number === '') {
    return 0;
  }
  return Number.parseInt(number, 10).toLocaleString('id-ID');
};
