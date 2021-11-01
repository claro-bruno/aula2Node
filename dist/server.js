"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categories_router_1 = require("./routes/categories.router");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/get', function (request, response) {
    return response.status(200).json('Hello World');
});
app.use('/categories', categories_router_1.categoriesRoutes);
app.listen(3333, function () { return console.log('Listing'); });
