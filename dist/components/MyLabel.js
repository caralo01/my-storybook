"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./myLabel.css");
var MyLabel = function (_a) {
    var text = _a.text, _b = _a.size, size = _b === void 0 ? "normal" : _b, type = _a.type, _c = _a.allCaps, allCaps = _c === void 0 ? false : _c, _d = _a.fontColor, fontColor = _d === void 0 ? "" : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? "transparent" : _e;
    var typeClass = type ? "text-".concat(type) : "";
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { color: fontColor, backgroundColor: backgroundColor }, className: "label ".concat(size, " ").concat(typeClass) }, { children: allCaps ? text.toUpperCase() : text })));
};
exports.MyLabel = MyLabel;
