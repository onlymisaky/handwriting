function forEach(cb) {
  for (let index = 0; index < this.length; index++) {
    cb.call(this, this[index], index, this);
  }
}

Array.prototype.forEach = forEach;
