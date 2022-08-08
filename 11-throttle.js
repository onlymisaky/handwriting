function throttle(fn, delay = 300) {
  let curTime = Date.now();

  return function (...args) {
    if (Date.now() - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(this, args);
    }
  };
}

function log() {
  console.log(Date.now());
}

let throttleLog = throttle(log)

setInterval(() => {
  throttleLog()
}, 200);
