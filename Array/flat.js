const isArr = (arr) => arr instanceof Array;

function flat(depth) {
  let dept = isNaN(depth) ? 1 : Number(depth);
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const item = this[index];
    if (isArr(item) && dept > 0) {
      // todo
      result.push(...item.flat(--dept))
    } else {
      result.push(item);
    }
  }
  return result;
}

Array.prototype.flat = flat;
