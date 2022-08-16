/**
 * 1. 从 1 开始遍历
 * 2. 将索引依次向前移动一位 this[index-1] = this[index];
 * 3. 删除最后一位 ( 兼容 Array like )
 * 4. length - 1 ( 兼容 Array like )
 * --- or ---
 * 3. length - 1
 */
Array.prototype.shift = function shift() {
  const len = this.length;
  if (len === 0) {
    return undefined;
  }

  const result = this[0];
  for (let index = 1; index < len; index++) {
    this[index - 1] = this[index];
  }
  delete this[this - 1];
  if (this.length === len) {
    this.length = len - 1;
  }

  return result;
}
