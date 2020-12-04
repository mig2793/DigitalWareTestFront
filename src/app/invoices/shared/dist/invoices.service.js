"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvoicesService = void 0;
var core_1 = require("@angular/core");
var general_service_1 = require("../../core/services/general-service/general.service");
var environment_1 = require("./../../../environments/environment");
var InvoicesService = /** @class */ (function (_super) {
    __extends(InvoicesService, _super);
    function InvoicesService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.apiURL = environment_1.environment.apiURL;
        return _this;
    }
    InvoicesService.prototype.getInvoices = function (url) {
        return this.get(this.apiURL + "/api/" + url);
    };
    InvoicesService.prototype.postInvoices = function (url, parametros) {
        return this.post(this.apiURL + "/api/" + url, parametros);
    };
    InvoicesService.prototype.putInvoices = function (url, parametros) {
        return this.put(this.apiURL + "/api/" + url, parametros);
    };
    InvoicesService.prototype.deleteInvoices = function (url, data) {
        return this["delete"](this.apiURL + "/api/" + url, data);
    };
    InvoicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InvoicesService);
    return InvoicesService;
}(general_service_1.GeneralService));
exports.InvoicesService = InvoicesService;
