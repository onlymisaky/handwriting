// TODO
function jsonParse(str) {
  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
  if (
    rx_one.test(
      str
        .replace(rx_two, "@")
        .replace(rx_three, "]")
        .replace(rx_four, "")
    )
  ) {
    return eval("(" + str + ")");
  }
}
