"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
var CreateCategoryService = /** @class */ (function () {
    function CreateCategoryService(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    ;
    CreateCategoryService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        // const categoryRepository = new CategoryRepositoy();
        var categoryAlreadExists = this.categoryRepository.findbyName(name);
        if (!categoryAlreadExists) {
            throw new Error('Category Alread Exists!');
            //return response.status(400).json({ error: 'Category Alread Exists!'});
        }
        this.categoryRepository.create({ name: name, description: description });
    };
    return CreateCategoryService;
}());
exports.CreateCategoryService = CreateCategoryService;
