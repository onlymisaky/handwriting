/**
 * 1. 获取参数个数
 * 2. 遍历参数
 * 3. length + 1 (兼容 Array like )
 * 4. 赋值
 * --- or ---
 * 2. 遍历参数,
 * 3. 赋值同时 length + 1 : this[this.length] = args[index]
 */
Array.prototype.push = function push() {
  const args = Array.prototype.slice.call(arguments);

  for (let index = 0; index < args.length; index++) {
    this.length = this.length + 1;
    this[this.length - 1] = args[index];
  }

  return this.length
} 
