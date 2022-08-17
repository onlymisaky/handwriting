/**
 * 1. 截取需要 copy 的部分
 * 2. 将需要 copy 的部分替换到原 Array 中
 */
 Array.prototype.copyWithin = function copyWithin(target, start, end) {
  const len = this.length;

  let _target = isNaN(target) ? 0 : Number(target);
  if (_target >= len) {
    return this;
  }
  if (_target < 0) {
    _target = Math.max(0, len + _target);
  }

  let _start = isNaN(start) ? 0 : Number(start);
  if (_start >= len) {
    return this;
  }
  if (_start < 0) {
    _start = Math.max(0, len + _start);
  }

  let _end = isNaN(end) ? len : Number(end);
  if (_end > len) {
    _end = Math.min(_end, len);
  }
  if (_end < 0) {
    _end = Math.max(0, len + _end);
  }
  if (_end <= _start) {
    return this;
  }

  const arr = [];
  for (let i = _start; i < _end; i++) {
    // todo 兼容 Array like [].copyWithin.call({ length: 5, 3: 1 }, 0, 3)
    if (i in this) {
      arr[arr.length] = this[i];
    }
  }

  let remainingLength = Math.min(len - _target, arr.length);
  for (let i = 0; i < remainingLength; i++) {
    this[_target] = arr[i];
    _target++;
  }

  delete arr;

  return this;
};
