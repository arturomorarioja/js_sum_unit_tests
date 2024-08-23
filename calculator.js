'use strict';

sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Incorrect parameter type');
    }
    return a + b;
}
exports.sum = sum