const {red, blue, green } = require('chalk')

console.log(blue('Edge1: Hello'))
if (globalThis !== global) {
    console.log(red('Edge1: global is not === globalThis'))
}
if (globalThis !== this) {
    console.log(red('Edge1: this is not === globalThis'))
}
console.log(green('edge1:Done'))
