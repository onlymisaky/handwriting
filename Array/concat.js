const isArr = (arr) => arr instanceof Array;

Array.prototype.concat = function concat() {
  const result = [];
  if (isArr(this)) {
    for (let i = 0; i < this.length; i++) {
      result[result.length] = this[i];
    }
  } else {
    result[result.length] = this;
  }

  const len = arguments.length;
  if (len === 0) {
    return result;
  }

  for (let i = 0; i < len; i++) {
    const item = arguments[i];
    if (isArr(item)) {
      // todo 可以优化吗
      for (let j = 0; j < item.length; j++) {
        result[result.length] = item[j];
      }
    } else {
      result[result.length] = item;
    }
  }

  return result;
}
