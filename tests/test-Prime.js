const expect = require('chai').expect;
const assert = require('chai').assert;
const Prime = require('../src/main').Prime;

describe('Prime tests', () => {

    it(`Prime.isPrime(3) should return a boolean`, () => {
        const result = Prime.prototype.isPrime(3);
        assert.isBoolean(result, 'is returned a boolean');
    });

    it(`Prime.isPrime(-3) should return a boolean`, () => {
        const result = Prime.prototype.isPrime(-3);
        assert.isBoolean(result, 'is returned a boolean');
    });

    it(`Prime.isPrime(3) should return true`, () => {
        const result = Prime.prototype.isPrime(3);
        expect(result).to.equal(true);
    });

    it(`Prime.isPrime(-3) should return true`, () => {
        const result = Prime.prototype.isPrime(-3);
        expect(result).to.equal(true);
    });

    it(`Prime.isPrime(4) should return false`, () => {
        const result = Prime.prototype.isPrime(4);
        expect(result).to.equal(false);
    });

    it(`Prime.isPrime(-4) should return false`, () => {
        const result = Prime.prototype.isPrime(-4);
        expect(result).to.equal(false);
    });

    it(`Prime.isPrime(1) should return true`, () => {
        const result = Prime.prototype.isPrime(1);
        expect(result).to.equal(true);
    });

    it(`Prime.isPrime(0) should return false`, () => {
        const result = Prime.prototype.isPrime(0);
        expect(result).to.equal(false);
    });
});