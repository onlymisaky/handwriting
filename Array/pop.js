/**
 * 1. length - 1
 * 2. 删除 “最后” 一个属性 (兼容 Array like )
 */
Array.prototype.pop = function pop() {
  const len = this.length;
  if (len === 0) {
    return undefined;
  }

  const result = this[len - 1];
  delete this[len - 1];
  if (this.length === len) {
    this.length = len - 1;
  }

  return result;
}
