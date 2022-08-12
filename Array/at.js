/**
 * @param {number} index 
 */
function at(index) {
  let i = Number(index);
  i = isNaN(i) ? 0 : i;

  const len = this.length;
  const a = len - 1;
  const b = len * -1;

  if (i >= 0 && i <= a) {
    return this[i];
  } else if (i >= b && i < 0) {
    return this[len + i];
  } else {
    return undefined;
  }
}

Array.prototype.at = at;
