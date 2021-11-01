"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var uuid_1 = require("uuid");
var Category = /** @class */ (function () {
    function Category() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
        // if (!this.created_at) {
        //   this.created_at = new Date();
        // }
    }
    return Category;
}());
exports.Category = Category;
