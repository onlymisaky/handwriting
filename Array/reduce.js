function reduce(cb, initialValue) {
  const args = Array.prototype.slice.call(arguments);
  let result = args.length >= 2 ? initialValue : this[0];
  const start = args.length >= 2 ? 0 : 1;
  for (let index = start; index < this.length; index++) {
    result = cb.call(this, result, this[index], index, this);
  }
  return result;
}

Array.prototype.reduce = reduce;
