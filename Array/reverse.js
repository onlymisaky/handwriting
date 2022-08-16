Array.prototype.reverse = function reverse() {
  if (this.length === 0 || this.length === 1) {
    return this;
  }
  let leftIndex = 0;
  let rightIndex = this.length - 1;
  while (leftIndex !== rightIndex && leftIndex < rightIndex) {
    let left = this[leftIndex];
    let right = this[rightIndex];
    this[leftIndex] = right;
    this[rightIndex] = left;
    leftIndex++;
    rightIndex--;
  }
  return this;
}
