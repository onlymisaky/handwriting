function every(cb) {
  if (this.length === 0) {
    return true;
  }

  for (let index = 0; index < this.length; index++) {
    const flag = cb.call(this, this[index], index, Object(this));
    if (!flag) {
      return flag;
    }
  }

  return true;
}

Array.prototype.every = every;
