const InvalidParametersError = require('./errors/InvalidParametersError');
const DivisionByZeroError = require('./errors/DivisionByZeroError');

/*
Vanilla JS decorator pattern
---
The method bellow implements a vanilla JS version of the Decorator design pattern.
 */
function wrapper(internalOperation) {
    return function() {
        const [a, b] = arguments;
        if(!validateInputs(a, b)) {
            throw new InvalidParametersError();
        }

        return internalOperation.apply(this, arguments);
    }
}

const validateInputs = (a, b) => typeof a === "number" && typeof b === "number";

const validateDivisor = divisor => divisor !== 0;

const internalSum = (a, b) => a + b;

const internalSubtract = (a, b) => a - b;

const internalMultiply = (a, b) => a * b;

const internalDivide = (a, b) => {
    if(!validateDivisor(b)) throw new DivisionByZeroError();
    return a / b;
};

//Exported methods
exports.sum = wrapper(internalSum);
exports.subtract = wrapper(internalSubtract);
exports.multiply = wrapper(internalMultiply);
exports.divide = wrapper(internalDivide);


