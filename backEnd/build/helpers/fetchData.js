"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const axios_1 = __importDefault(require("axios"));
const countries_json_1 = __importDefault(require("../helpers/countries.json"));
const getData = (name) => {
    const responseGender = axios_1.default.get(`https://api.genderize.io?name=${name}`);
    const responseLocation = axios_1.default.get(`https://api.nationalize.io?name=${name}`);
    return Promise.all([responseLocation, responseGender])
        .then(values => {
        const location = values[0].data;
        const gender = values[1].data;
        if (location.country.length === 0 || gender.gender === null) {
            new Error();
        }
        return {
            probabilityLocation: getCountry(location.country[0].country_id),
            probabilityGender: gender.gender,
        };
    })
        .catch(err => {
        return err;
    });
};
exports.getData = getData;
const getCountry = (id) => {
    const countryName = countries_json_1.default.filter(country => {
        return country.code === id;
    });
    return countryName[0].name;
};
