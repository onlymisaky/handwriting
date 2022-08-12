function unshift() {
  const args = Array.prototype.slice.call(arguments);
  if (args.length === 0) {
    return this.length;
  }

  const argsLen = args.length;
  const oldLen = this.length;
  const result = oldLen + argsLen;

  // for (let index = 0; index < oldLen; index++) {
  //   args[length] = this[index]
  // }
  // this = args;

  this.length = result;
  for (let index = result - 1; index >= 0; index--) {
    if (index > argsLen - 1) {
      this[index] = this[index - argsLen];
    } else {
      this[index] = args[index];
    }
  }

  return result;
}

Array.prototype.unshift = unshift;
