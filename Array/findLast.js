function findLast(cb) {
  for (let index = this.length - 1; index >= 0; index--) {
    let flag = cb.call(this, this[index], index, Object(this));
    if (flag) {
      return this[index];
    }
  }
  return undefined;
}

Array.prototype.findLast = findLast;
