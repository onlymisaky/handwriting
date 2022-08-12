function slice(begin, end) {
  const len = this.length;
  let start = Number(begin) || 0;
  let _end = Number(end) || len;

  if (start < 0) {
    start = len + start;
  }
  if (_end < 0) {
    _end = len + _end;
  }

  start = Math.min(start, len);
  _end = Math.min(_end, len);

  const result = [];

  if (start >= _end) {
    return result;
  }

  for (let index = start; index < _end; index++) {
    result[result.length] = this[index];
  }

  return result;
}

Array.prototype.slice = slice;
