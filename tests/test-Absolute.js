const expect = require('chai').expect;
const assert = require('chai').assert;
const Absolute = require('../src/main').Absolute;

describe('Absolute tests', () => {

    it(`Absolute.getAbsolute(-5) should return a number`, () => {
        const result = Absolute.prototype.getAbsolute(-5);
        assert.isNumber(result, 'is returned a number');
    });

    it(`Absolute.getAbsolute(-5) should return 5`, () => {
        const result = Absolute.prototype.getAbsolute(-5);
        expect(result).to.equal(5);
    });

    it(`Absolute.getAbsolute(5) should return 5`, () => {
        const result = Absolute.prototype.getAbsolute(5);
        expect(result).to.equal(5);
    });
});