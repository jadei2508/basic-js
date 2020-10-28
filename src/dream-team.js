const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  if(typeof members !== Array && members !== null && members !== undefined) {
    outer: for(let i = 0; i < members.length; i++) {
      let buff=members[i];
      if(typeof buff === 'string') {
        result.push(buff.trim()[0].toUpperCase());
      }
      // }
    }
   return result.sort().join('')
  } else {
    return false;
  }
};
