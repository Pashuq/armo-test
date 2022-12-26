function twoDigits(num: number) {
  return ("0" + num).slice(-2);
}

export const UseTransformDateNumberToString = () => {
  const transformNumToStr = (date: number): string => {
    return `
    ${twoDigits(new Date(date).getDate())}.${twoDigits(
      new Date(date).getMonth() + 1
    )}.${new Date(date).getFullYear()}`;
  };

  return transformNumToStr;
};
