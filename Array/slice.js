Array.prototype.slice = function slice(begin, end) {
  const len = this.length;

  let _begin = isNaN(begin) ? 0 : Number(begin);
  if (_begin < 0) {
    _begin = Math.max(0, len + _begin);
  }

  let _end = isNaN(end) ? 0 : Number(end);
  if (_end < 0) {
    _end = Math.max(0, len + _end);
  }
  if (_begin >= _end) {
    return [];
  }

  const result = [];

  for (let index = _begin; index < _end; index++) {
    // 兼容  Array like
    result.length = result.length + 1;
    if (index in this) {
      result[result.length - 1] = this[index];
    }
  }

  return result;
} 
