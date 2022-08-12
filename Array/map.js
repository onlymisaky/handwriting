function map(cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const item = cb.call(this, this[index], index, this);
    result[index] = item;
  }
  return result;
}

Array.prototype.map = map;
