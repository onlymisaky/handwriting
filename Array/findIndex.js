function findIndex(cb) {
  for (let index = 0; index < this.length; index++) {
    let flag = cb.call(this, this[index], index, Object(this));
    if (flag) {
      return index;
    }
  }
  return -1;
}

Array.prototype.findIndex = findIndex;
