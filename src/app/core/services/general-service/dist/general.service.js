"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GeneralService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
    }
    GeneralService.prototype.get = function (url) {
        return this.http
            .get(url)
            .pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    GeneralService.prototype.post = function (url, parametros) {
        return this.http
            .post(url, parametros)
            .pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    GeneralService.prototype.put = function (url, parametros) {
        return this.http
            .put(url, parametros)
            .pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    GeneralService.prototype["delete"] = function (url, data) {
        return this.http["delete"](url, data)
            .pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    GeneralService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GeneralService);
    return GeneralService;
}());
exports.GeneralService = GeneralService;
