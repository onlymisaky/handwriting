const isArr = (arr) => arr instanceof Array;

Array.prototype.join = function join(separator) {
  let chart = separator;
  if (separator === undefined) {
    chart = ','
  } else {
    chart = chart.toString();
  }

  const len = this.length;

  let result = '';

  for (let index = 0; index < len; index++) {
    const item = this[index];
    if (isArr(item)) {
      result = result + item.join();
    } else {
      result = result + item;
    }
    if (index < len - 1) {
      result = result + chart
    }
  }

  return result;
}
