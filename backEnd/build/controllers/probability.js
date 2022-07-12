"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setResults = void 0;
const fetchData_1 = require("../helpers/fetchData");
const setResults = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (typeof name === 'string') {
            const result = yield (0, fetchData_1.getData)(name);
            if (result instanceof Error) {
                throw { status: 400, message: 'name not exist' };
            }
            else {
                return res.send(result);
            }
        }
    }
    catch (err) {
        next(err);
    }
});
exports.setResults = setResults;
