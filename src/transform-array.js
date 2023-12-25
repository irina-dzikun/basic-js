const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newarr = arr.slice();
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[0] == "--discard-prev" || newarr[0] == "--double-prev") {
      newarr.splice(0, 1);
    }
    if (newarr[i] == "--discard-next") {
      newarr.splice(i, 2);
    } else if (newarr[i] == "--discard-prev") {
      newarr.splice(i - 1, 2);
    } else if (newarr[i] == "--double-next") {
      newarr.splice(i, 1, newarr[i + 1]);
    } else if (newarr[i] == "--double-prev") {
      newarr.splice(i, 1, newarr[i - 1]);
    }
  }
  return newarr.filter(
    (i) => i && i != "--discard-next" && i != "--discard-prev" && i != "--double-next" && i != "--double-prev"
  );
}

module.exports = {
  transform,
};
