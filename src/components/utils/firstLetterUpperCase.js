export const firstLetterUpperCase = string => {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
};