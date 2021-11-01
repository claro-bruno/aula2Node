"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
var category_1 = require("../model/category");
;
var CategoriesRepository = /** @class */ (function () {
    function CategoriesRepository() {
        this.categories = [];
    }
    ;
    CategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new category_1.Category();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date(),
        });
        this.categories.push(category);
    };
    CategoriesRepository.prototype.list = function () {
        return this.categories;
    };
    CategoriesRepository.prototype.findbyName = function (name) {
        var category = this.categories.find(function (category) { return category.name = name; });
        return category;
    };
    return CategoriesRepository;
}());
exports.CategoriesRepository = CategoriesRepository;
