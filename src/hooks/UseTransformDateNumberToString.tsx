export const UseTransformDateNumberToString = () => {
  const transformNumToStr = (date: number): string => {
    return ` ${new Date(date).getDate()}.${
      new Date(date).getMonth() + 1
    }.${new Date(date).getFullYear()}`;
  };

  return transformNumToStr;
};
