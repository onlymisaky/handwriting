function includes(searchElement, fromIndex) {
  let start = isNaN(fromIndex) ? 0 : Number(fromIndex);
  const len = this.length;
  if (start < 0) {
    start = Math.max(0, len + start);
  }

  for (let index = start; index < len; index++) {
    if (this[index] === searchElement) {
      return true;
    }
  }

  return false;
}

Array.prototype.includes = includes;
