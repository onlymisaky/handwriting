const isArr = (arr) => arr instanceof Array;

// todo depth = 1;

function flatMap(cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    let item = this[index];
    if (isArr(item)) {
      // todo
      result.push(...item.flatMap(cb))
    } else {
      item = cb.call(this, item, index, Object(this));
      result.push(item);
    }
  }
  return result;
}

Array.prototype.flatMap = flatMap; 
