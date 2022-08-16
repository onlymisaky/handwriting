/**
 * 1. 获取参数个数
 * 2. 计算最终的 length 
 * 3. 倒序遍历
 * 4. 对于原有的值，索引依次向后移动 args.length 位
 * 5. 将 args 的 item 依次写入
 */
Array.prototype.unshift = function unshift() {
  const args = Array.prototype.slice.call(arguments);
  if (args.length === 0) {
    return this.length;
  }

  const argsLen = args.length;
  const result = argsLen + this.length;
  this.length = result;

  for (let index = result - 1; index >= 0; index--) {
    if (index > args.length - 1) {
      this[index] = this[index - argsLen]
    } else {
      this[index] = args[index];
    }
  }

  return result;
}
