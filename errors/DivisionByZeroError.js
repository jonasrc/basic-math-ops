const statusCodes = require('http-status-codes');
const ERR_DIVISION_BY_ZERO = 'Division by zero is not allowed.';

class DivisionByZeroError extends Error {
    constructor() {
        super(ERR_DIVISION_BY_ZERO);
        this.name = this.constructor.name;
        this.status = statusCodes.BAD_REQUEST;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = DivisionByZeroError;