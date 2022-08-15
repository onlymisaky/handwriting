function some(cb) {
  if (this.length === 0) {
    return false;
  }

  for (let index = 0; index < this.length; index++) {
    const flag = cb.call(this, this[index], index, Object(this));
    if (flag) {
      return flag;
    }
  }

  return false;
}

Array.prototype.some = some;
