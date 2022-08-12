function filter(cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const item = this[index];
    const flag = cb.call(this, item, index, this);
    if (flag) {
      result[result.length] = item;
    }
  }
  return result;
}

Array.prototype.filter = filter;
