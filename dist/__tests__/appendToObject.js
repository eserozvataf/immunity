"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var appendToObject_1 = tslib_1.__importDefault(require("../appendToObject"));
describe('appendToObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2 };
        var obj2 = { c: 3 };
        var result = appendToObject_1.default(obj1, obj2);
        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
//# sourceMappingURL=appendToObject.js.map