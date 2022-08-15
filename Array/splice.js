function splice(start, deleteCount, ...items) {
  if (arguments.length === 0) {
    return [];
  }

  const len = this.length;

  // 1. 默认取 0
  // 2. 当为负数时, 从数组末尾开计数
  // 3. 0 ~ len-1 之间
  let _start = Number(start) || 0;
  if (_start < 0) {
    _start = len + _start;
  }
  _start = Math.min(_start, len - 1);

  // 1. 在 start 传值的情况下, 默认取 len (len-1)
  // 2. 当为负数时, 值设为 0
  // 3. 0 ~ len-start 之间
  let count = isNaN(deleteCount) ? len : Number(deleteCount);
  if (count < 0) {
    count = 0;
  }
  count = Math.min(count, len - _start);
  const result = [];

  let itemsLen = items.length;
  this.length = len + itemsLen;

  if (items.length === 0) {
    for (let index = _start; index < this.length; index++) {
      const current = this[index];
      if (result.length < count) {
        result[result.length] = current;
      }

      const i = index + count;
      const next = this[i];
      this[index] = next;
    }
  } else if (items.length <= count) {
    for (let index = _start; index < this.length; index++) {
      const current = this[index];
      if (result.length < count) {
        result[result.length] = current;
      }

      if (itemsLen > 0) {
        const i = items.length - itemsLen;
        const next = items[i];
        this[index] = next;
        itemsLen--;
      } else {
        if (items.length !== count) {
          const i = index + count - items.length;
          const next = this[i];
          this[index] = next;
        }
      }
    }
  } else {
    const end = this.length - count;
    const rightStart = _start + itemsLen - 1;
    const offset = end - len;
    const sliceEnd = _start + count;

    for (let index = end; index > _start; index--) {
      const i = index - 1;
      if (i > rightStart) {
        this[i] = this[i - offset];
      } else {

        if (i < sliceEnd && i >= _start) {
          const current = this[i];
          // todo
          result.unshift(current);
        }

        const next = items[itemsLen - 1];
        this[i] = next;
        itemsLen--;
      }
    }
  }

  this.length = this.length - count;

  return result;
}

Array.prototype.splice = splice;
