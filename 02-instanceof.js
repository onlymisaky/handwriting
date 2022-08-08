function customInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  // let proto = left.__proto__
  const prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

customInstanceof([], Array);
customInstanceof([], Object);
customInstanceof([], Function);
customInstanceof({}, Array);
customInstanceof(() => { }, Function);
