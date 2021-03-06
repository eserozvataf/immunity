"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectAssign_1 = tslib_1.__importDefault(require("ponyfills/objectAssign"));
function removeFirstMatchFromObject(instance, predicate) {
    var notFound = true;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (notFound && predicate(instance[itemKey], itemKey, obj)) {
            notFound = false;
            return obj;
        }
        return objectAssign_1.default({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}
exports.default = removeFirstMatchFromObject;
//# sourceMappingURL=removeFirstMatchFromObject.js.map