function customBind(ctx) {
  const o = ctx || globalThis;
  const self = this;

  function bind(...args) {
    return self.call(o, ...args);
  };

  if (self.prototype) {
    bind.prototype = Object.create(self.prototype);
  }

  return bind;
}

Function.prototype.customBind = customBind;

const arrLike = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  length: 6,
};

const slice = Array.prototype.slice.customBind(arrLike);
slice(1, 3)
