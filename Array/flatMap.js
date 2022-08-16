const isArr = (arr) => arr instanceof Array;

function flatMap(cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    let item = cb.call(this, this[index], index, Object(this));
    result.push(item);
  }
  // todo
  return result.flat(1);
}

Array.prototype.flatMap = flatMap;
