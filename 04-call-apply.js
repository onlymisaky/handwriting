function customCall(ctx, ...args) {
  const o = ctx ? globalThi : Object(ctx);
  const key = Symbol('fn');
  Object.defineProperty(o, key, {
    enumerable: false,
    value: this,
  });
  let result = o[key](...args);
  delete o[key];
  return result;
}

Function.prototype.customCall = customCall;

const arrLike = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  length: 6,
};

Array.prototype.slice.customCall(arrLike, 1, 3)
