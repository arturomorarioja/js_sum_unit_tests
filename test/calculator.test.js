'use strict';
const {sum} = require('../calculator');

/**
 * Positive testing
 */

test('sum 4 and 13 equals 17', () => {
    const value = sum(4, 13);

    expect(value).toEqual(17);
});

test('sum 15 and 21 equals 36', () => {
    const value = sum(15, 21);

    expect(value).toEqual(36);
});

test('sum -4 and 5 equals 1', () => {
    const value = sum(-4, 5);

    expect(value).toEqual(1);
});

/**
 * Negative testing
 */

test('sum 1 and 1 does not equal 1', () => {
    const value = sum(1, 1);

    expect(value).not.toEqual(1);
});

test('sum 4 and 5 returns a number', () => {
    const value = sum(4, 5);

    expect(value).not.toBeNaN();
    expect(typeof value).toBe('number');
});