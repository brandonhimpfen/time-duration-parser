import parseDuration from '../src/index.js';

console.log(parseDuration('5m'));   // 300000
console.log(parseDuration('2h'));   // 7200000
console.log(parseDuration('1d'));   // 86400000
console.log(parseDuration('1.5h')); // 5400000
