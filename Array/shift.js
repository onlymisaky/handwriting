function shift() {
  const len = this.length;
  if (len === 0) {
    return undefined;
  }

  const result = this[0];
  for (let index = 1; index < len; index++) {
    this[index - 1] = this[index];
  }
  this.length = len - 1;
  return result;
}

Array.prototype.shift = shift;
