function debounce(fn, wait = 300) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      return fn.apply(this, args);
    }, wait);
  }
}

function log() {
  console.log(Date.now());
}

let debounceLog = debounce(log)

setInterval(() => {
  debounceLog();
}, 200)
