const statusCodes = require('http-status-codes');
const ERR_INVALID_PARAMETERS = 'Invalid parameters passed to function.';

class InvalidParametersError extends Error {
    constructor() {
        super(ERR_INVALID_PARAMETERS);
        this.name = this.constructor.name;
        this.status = statusCodes.BAD_REQUEST;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = InvalidParametersError;