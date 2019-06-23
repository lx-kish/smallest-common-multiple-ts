const expect = require('chai').expect;
const assert = require('chai').assert;
const SmallestCommons = require('../src/main').SmallestCommons;

describe('Smallest Commons tests', () => {

    it(`SmallestCommons.calculate([1, 5]) should return a number`, () => {
        const result = SmallestCommons.prototype.calculate([1, 5]);
        assert.isNumber(result, 'is returned value a number');
    });

    it(`SmallestCommons.calculate([1, 5]) should return 60`, () => {
        const result = SmallestCommons.prototype.calculate([1, 5]);
        expect(result).to.equal(60);
    });

    it(`SmallestCommons.calculate([5, 1]) should return 60`, () => {
        const result = SmallestCommons.prototype.calculate([5, 1]);
        expect(result).to.equal(60);
    });

    it(`SmallestCommons.calculate([2, 10]) should return 2520`, () => {
        const result = SmallestCommons.prototype.calculate([2, 10]);
        expect(result).to.equal(2520);
    });

    it(`SmallestCommons.calculate([1, 13]) should return 360360`, () => {
        const result = SmallestCommons.prototype.calculate([1, 13]);
        expect(result).to.equal(360360);
    });

    it(`SmallestCommons.calculate([23, 18]) should return 6056820`, () => {
        const result = SmallestCommons.prototype.calculate([23, 18]);
        expect(result).to.equal(6056820);
    });
});