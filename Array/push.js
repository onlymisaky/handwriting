function push() {
  const args = Array.prototype.slice.call(arguments);

  for (let index = 0; index < args.length; index++) {
    this[this.length] = args[index];
  }

  return this.length
}

Array.prototype.push = push;
