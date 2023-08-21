// https://juejin.cn/post/7238978371689136185
function createStack(source, parent) {
  return Object.keys(source).map((key) => ({ key, value: source[key], parent }));
}

function deepClone(source) {
  if (typeof source !== 'object') {
    return source;
  }

  const res = Array.isArray(source) ? [] : {};
  const stack = createStack(source, res);
  const map = new Map();

  while (stack.length) {
    const { key, value, parent } = stack.shift();
    if (typeof value === 'object') {
      if (map.has(value)) {
        parent[key] = map.get(value);
        break;
      }
      parent[key] = Array.isArray(value) ? [] : {};
      map.set(value, parent[key]);
      stack.push(...createStack(value, parent[key]));
    } else {
      parent[key] = value;
    }
  }

  map.clear();
  return res;
}

function deepCloneRecursion(source) {
  const map = new Map();

  function copy(source) {
    if (typeof source !== 'object' || source === null) {
      return source;
    }

    if (map.has(source)) {
      return map.get(source);
    }

    const res = Array.isArray(source) ? [] : {};
    map.set(source, res);

    if (Array.isArray(source)) {
      res.push(...source.map((item) => copy(item)));
    }

    for (const key in source) {
      res[key] = copy(source[key]);
    }

    return res;
  }

  const res = copy(source);
  map.clear();
  return res;
}
