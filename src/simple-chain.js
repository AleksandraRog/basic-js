const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  connector: "~~",
  toString() {
    return this.array.map((v) => `( ${v} )`).join(this.connector);
  },
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array ??= [];
    this.array.push(`${`${value}`.trim()}`);
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || position < 1) {
      delete this.array;
      throw new Error(`You can't remove incorrect link!`);
    }
    try {
      this.array?.splice(position - 1, 1);
      return this;
    } catch (err) {
      delete this.array;
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.array?.reverse();
    return this;
  },
  finishChain() {
    const str = this.toString();
    delete this.array;
    return str;
  },
};

module.exports = {
  chainMaker,
};
