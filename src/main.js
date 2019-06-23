"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Absolute = (function () {
    function Absolute() {
    }
    Absolute.prototype.getAbsolute = function (num) {
        return Math.abs(num);
    };
    return Absolute;
}());
exports.Absolute = Absolute;
var Prime = (function () {
    function Prime() {
    }
    Prime.prototype.isPrime = function (num) {
        var integer = new Absolute().getAbsolute(num);
        if (integer === 1)
            return true;
        var start = 2;
        while (start <= Math.sqrt(integer)) {
            if (integer % start++ < 1)
                return false;
        }
        return integer > 1;
    };
    return Prime;
}());
exports.Prime = Prime;
var LCD = (function () {
    function LCD() {
    }
    LCD.prototype.calculateLCD = function (num1, num2) {
        var integer1 = new Absolute().getAbsolute(num1);
        var integer2 = new Absolute().getAbsolute(num2);
        while (integer2 != 0) {
            var tmp = integer1 % integer2;
            integer1 = integer2;
            integer2 = tmp;
        }
        return integer1;
    };
    return LCD;
}());
exports.LCD = LCD;
var SmallestCommons = (function () {
    function SmallestCommons() {
    }
    SmallestCommons.prototype.calculate = function (arr) {
        var min = Math.min.apply(Math, arr);
        var max = Math.max.apply(Math, arr);
        var commonMultiple = 1;
        for (var i = max; i >= min; i--) {
            var prime = new Prime();
            if (prime.isPrime(commonMultiple) && prime.isPrime(i)) {
                commonMultiple *= i;
            }
            else if (commonMultiple % i === 0) {
                continue;
            }
            else {
                commonMultiple *= i / new LCD().calculateLCD(commonMultiple, i);
            }
        }
        return commonMultiple;
    };
    return SmallestCommons;
}());
exports.SmallestCommons = SmallestCommons;
console.log(new SmallestCommons().calculate([23, 18]));
//# sourceMappingURL=main.js.map