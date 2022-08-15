function find(cb) {
  for (let index = 0; index < this.length; index++) {
    let flag = cb.call(this, this[index], index, Object(this));
    if (flag) {
      return this[index];
    }
  }
  return undefined;
}

Array.prototype.find = find;
