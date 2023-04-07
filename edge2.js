import { red, blue, green } from 'chalk'

console.log(blue('Edge2: Hello'))
if (globalThis !== global) {
    console.log(red('Edge2: global is not === globalThis'))
}
if (globalThis !== this) {
    console.log(red('Edge2: this is not === globalThis'))
}
console.log(green('edge2:Done'))
