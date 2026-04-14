function deepClone(source) {

  const weakMap = new WeakMap();
  if (typeof source === 'object') {
    weakMap.set(source, true);
  }

  function clone(source) {
    let type = typeof source;

    if ([
      'string',
      'number',
      'undefined',
      'boolean',
      'bigint',
      'symbol'
    ].includes(type)) {
      return source;
    }

    type = Object.prototype.toString.call(source).slice(8, -1).toLowerCase();

    if ('null' === type) {
      return null;
    }

    const custom = Object.keys(source).reduce((prev, key) => {
      prev[key] = deepClone(source[key]);
      return prev;
    }, Object.create(null));

    if ('object' === type) {
      return custom;
    }

    let result;

    if ('array' === type) {
      custom.length = source.length;
      return Array.from(custom);
    }

    if ('arraybuffer' === type) {
      result = source.slice();
    }

    if ('function' === type) {
      result = source;
    }

    if (['regexp', 'date'].includes(type)) {
      result = new source.constructor(source);
    }

    if (['set'].includes(type)) {
      result = new source.constructor();
      for (const item of source.keys()) {
        result.add(deepClone(item));
      }
    }

    if ('map' === type) {
      result = new Map();
      for (const [k, v] of source.entries()) {
        result.set(k, deepClone(v));
      }
    }

    return Object.keys(custom).reduce((prev, key) => {
      prev[key] = custom[key];
      return prev;
    }, result);
  }

  return clone(source);

}

var reg = /123/;
reg.name = 'this is reg';

var date = new Date();
date.name = 'this is date';

var array = [1, 2, [[3]],
  {
    name: 'array',
    say() {
      console.log(this.name);
    }
  }
];

var set = new Set(array);

var set = new WeakSet(array.slice(3));

var map = new Map([
  ['a', 'a'],
  ['b', 'b'],
  ['array', array]
]);

const o = {
  string: 'string',
  number: 0,
  undefined: undefined,
  boolean: false,
  bigint: 123n,
  symbol: Symbol(1),
  reg,
  date,
  array,
  set,
  map
};

console.log(deepClone(o));


class A {
  constructor() {
    this.name = 'a';
  }

  say() {
    console.log(this.name);
  }
}
var a = new A

console.log(Object.prototype.toString.call(a).slice(8, -1).toLowerCase());

console.log(a.constructor);


function cloneC(object) {
  return Object.create(object);
}
你是一个智能AI助手，可以帮我检索你信息库中信息，当我问你问题时，和你闲聊，讨论事情，对话时，不仅要回答我，也要告诉我信息来源和时间，格式为

我的回答: 
xxxxx

信息来源: xxxxx(如果有网址，请提供具体网址)

时间: xxxxx

无论我说什么，问什么，即使是普通的对话打招呼，即使是我胡言乱语，你都要按照这个格式回答，并且不要添加任何多余的话语和解释
请务必严格遵守

如果你接受，那我们便开启对话
