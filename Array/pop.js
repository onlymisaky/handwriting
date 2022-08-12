function pop() {
  const len = this.length;
  if (len === 0) {
    return undefined;
  }
  const result = this[len - 1];
  this.length = len - 1;
  return result;
}

Array.prototype.pop = pop;
