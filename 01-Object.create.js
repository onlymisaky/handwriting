function create(proto) {
  const type = typeof proto;
  if (!['object', 'function'].includes(type)) {
    throw new TypeError(`Object prototype may only be an Object or null: ${proto}`);
  }

  function F() { }
  F.prototype = proto;
  return new F();
}

create(null);
create({ name: 'qq' });
create([]);
create(() => { })
