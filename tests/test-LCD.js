const expect = require('chai').expect;
const assert = require('chai').assert;
const LCD = require('../src/main').LCD;

describe('LCD tests', () => {

    it(`LCD.calculateLCD(60, 15) should return a number`, () => {
        const result = LCD.prototype.calculateLCD(60, 15);
        assert.isNumber(result, 'is returned a number');
    });

    it(`LCD.calculateLCD(-60, 15) should return a number`, () => {
        const result = LCD.prototype.calculateLCD(-60, 15);
        assert.isNumber(result, 'is returned a number');
    });

    it(`LCD.calculateLCD(60, 15) should return 60`, () => {
        const result = LCD.prototype.calculateLCD(60, 15);
        expect(result).to.equal(15);
    });

    it(`LCD.calculateLCD(-60, 15) should return 60`, () => {
        const result = LCD.prototype.calculateLCD(-60, 15);
        expect(result).to.equal(15);
    });

    it(`LCD.calculateLCD(7, 5) should return don't know`, () => {
        const result = LCD.prototype.calculateLCD(7, 5);
        expect(result).to.equal(1);
    });

    it(`LCD.calculateLCD(48, 20) should return false`, () => {
        const result = LCD.prototype.calculateLCD(48, 20);
        expect(result).to.equal(4);
    });
});