const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let str1 = arr[0];
  let num = 1;
  let str2 = "";
  for (let i = 1; i < arr.length; i++) {
    if (str1 == arr[i]) {
      num += 1;
    } else {
      str2 += (num == 1 ? "" : num) + str1;
      str1 = arr[i];
      num = 1;
    }
    if (i == arr.length - 1) {
      str2 += (num == 1 ? "" : num) + str1;
    }
  }
  return str2;
}

module.exports = {
  encodeLine,
};
