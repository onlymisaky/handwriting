function findLastIndex(cb) {
  for (let index = this.length - 1; index >= 0; index--) {
    let flag = cb.call(this, this[index], index, Object(this));
    if (flag) {
      return index;
    }
  }
  return -1;
}

Array.prototype.findLastIndex = findLastIndex;
