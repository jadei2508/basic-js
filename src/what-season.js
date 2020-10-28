const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.entries(date).length > 0) throw new Error();

  let month = date.getMonth();
  let result = '';
  if(month >= 0 && month < 2 || month === 11) {
    result = 'winter'
  } else if(month >= 2 && month < 5) {
    result = 'spring'
  } else if(month >= 5 && month < 8) {
    result = 'summer'
  } else if(month >= 8 && month < 11) {
    result = 'autumn'
  }
  // remove line with error and write your code here
  return result;
};
