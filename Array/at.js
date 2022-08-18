Array.prototype.at = function at(index) {
  const len = this.length;
  let _index = isNaN(index) ? 0 : Number(index);
  if (_index < 0) {
    _index = len + _index;
  }
  if (_index >= len || _index < 0) {
    return undefined;
  }

  return this[_index];
}
