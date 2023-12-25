const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  data: [],
  getLength() {
    return this.data.length;
  },
  addLink(value) {
    const obj = { ...this, data: this.data.slice() };
    obj.data.push(String(value));
    return obj;
  },
  removeLink(position) {
    if (position == 0 || this.data[position] == undefined) {
      throw new Error("You can't remove incorrect link!");
    }
    this.data.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    let b = [];
    for (let i = 0; i < this.data.length; i++) {
      b.push(`( ${this.data[i]} )`);
    }
    let a = b.join("~~");
    this.data = [];
    return a;
  },
};

module.exports = {
  chainMaker,
};
