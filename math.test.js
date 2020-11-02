const math = require('./math');

//Parameter validation tests
test('Passing not numeric strings (\'abc\' + \'cde\') = Error: ' + math.ERR_INVALID_PARAMETERS, () => {
    expect(() => math.sum('abc', 'def')).toThrowError(math.ERR_INVALID_PARAMETERS);
});

test('Passing numeric strings (\'1\' + \'2\') = Error: ' + math.ERR_INVALID_PARAMETERS, () => {
    expect(() => math.sum('1', '2')).toThrowError(math.ERR_INVALID_PARAMETERS);
});

//Sum tests
test('1 + 2 = 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('1 + (-2) = -1', () => {
    expect(math.sum(1, -2)).toBe(-1);
});

test('(-3) + (-2) = -5', () => {
    expect(math.sum(-3, -2)).toBe(-5);
});

//Subtraction tests
test('5 - 2 = 3', () => {
    expect(math.subtract(5, 2)).toBe(3);
});

test('2 - 2 = 0', () => {
    expect(math.subtract(2, 2)).toBe(0);
});

test('2 - (-5) = 7', () => {
    expect(math.subtract(2, -5)).toBe(7);
});

//Multiplication tests
test('4 * 2 = 8', () => {
    expect(math.multiply(4, 2)).toBe(8);
});

test('8 * 0 = 0', () => {
    expect(math.multiply(8, 0)).toBe(0);
});

test('8 * (-2) = -16', () => {
    expect(math.multiply(8, -2)).toBe(-16);
});

//Division tests
test('16 / 2 = 8', () => {
    expect(math.divide(16, 2)).toBe(8);
});

test('8 / 0 = Error: ' + math.ERR_DIVISION_BY_ZERO, () => {
    expect(() => math.divide(8, 0)).toThrowError(math.ERR_DIVISION_BY_ZERO);
});