const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let objs1 = {};
  let objs2 = {};
  let sum = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in objs1) {
      objs1[s1[i]]++;
    } else {
      objs1[s1[i]] = 1;
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (s2[j] in objs2) {
      objs2[s2[j]]++;
    } else {
      objs2[s2[j]] = 1;
    }
  }
  for (let key in objs1) {
    if (key in objs2) {
      if (objs1[key] <= objs2[key]) {
        sum = sum + objs1[key];
      } else {
        sum = sum + objs2[key];
      }
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
