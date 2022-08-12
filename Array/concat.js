/**
 * 
 */
function concat() {
  const args = Array.prototype.slice.call(arguments);

  // 对原数组浅拷贝
  const result = this.map((item) => item);

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];

    if (arg instanceof Array) {
      arg.forEach((item) => {
        result.push(item);
      });
    } else {
      result.push(arg);
    }
  }

  return result;
}

Array.prototype.concat = concat;
