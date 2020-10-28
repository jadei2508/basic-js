const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity !== Number || typeof sampleActivity === null ||
      typeof sampleActivity === undefined) {
    return false;
  }
  return Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.963 / HALF_LIFE_PERIOD));
};
