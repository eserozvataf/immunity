"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var splitLastObject_1 = tslib_1.__importDefault(require("../splitLastObject"));
describe('splitLastObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        var val1 = 2;
        var result = splitLastObject_1.default(obj1, val1);
        expect(result.items).not.toBe(obj1);
        expect(Object.keys(result.items)).toHaveLength(2);
        expect(result.items).toEqual({ d: 4, e: 5 });
        expect(result.rest).not.toBe(obj1);
        expect(Object.keys(result.rest)).toHaveLength(3);
        expect(result.rest).toEqual({ a: 1, b: 2, c: 3 });
    });
});
//# sourceMappingURL=splitLastObject.js.map