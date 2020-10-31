const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {

  let additions = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator);

  return new Array(repeatTimes).fill(`${str}${additions}`).join(separator);
};
// module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
//
//   let additionStr = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator);
//
//   return new Array(repeatTimes).fill(`${str}${additionStr}`).join(separator);
// };
  