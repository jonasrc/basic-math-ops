const math = require('./math');

console.log('Operações do item 4:\n');

// a) 1 + 1
console.log('a) 1 + 1 = ' + math.sum(1, 1));

// b) -123 + 123123
console.log('b) -123 + 123123 = ' + math.sum(-123, 123123));

// c) 8 * 0
console.log('c) 8 * 0 = ' + math.multiply(8, 0));

// d) 1239123 * 12313
console.log('d) 1239123 * 12313 = ' + math.multiply(1239123, 12313));

// e) 123 / -12
console.log('e) 123 / -12 = ' + math.divide(123, -12));

// f) 313123 / 0
console.log('Note: the operation bellow is expected to throw a division-by-zero exception.');
console.log('f) 313123 / 0 = ' + math.divide(313123, 0));