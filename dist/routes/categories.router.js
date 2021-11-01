"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
// import { v4 as uuidv4 } from 'uuid';
// import { Category } from '../model/category';
var CategoriesRepository_1 = require("../repositories/CategoriesRepository");
var CreateCategoryService_1 = require("../services/CreateCategoryService");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var categoryRepository = new CategoriesRepository_1.CategoriesRepository();
// const categories: Category[] = [];
categoriesRoutes.post('/', function (request, response) {
    var _a = request.body, name = _a.name, description = _a.description;
    var createCategoryService = new CreateCategoryService_1.CreateCategoryService(categoryRepository);
    createCategoryService.execute({ name: name, description: description });
    // const categoryAlreadExists = categoryRepository.findbyName(name);
    // if(!categoryAlreadExists) {
    //   return response.status(400).json({ error: 'Category Alread Exists!'});
    // }
    // categoryRepository.create({ name, description })
    return response.status(201).send();
});
categoriesRoutes.get('/', function (request, response) {
    var all = categoryRepository.list();
    return response.status(200).json(all);
});
