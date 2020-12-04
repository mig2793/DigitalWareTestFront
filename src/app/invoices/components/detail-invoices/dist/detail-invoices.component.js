"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailInvoicesComponent = void 0;
var core_1 = require("@angular/core");
var DetailInvoicesComponent = /** @class */ (function () {
    function DetailInvoicesComponent() {
        this.isDetalInvoice = new core_1.EventEmitter();
    }
    DetailInvoicesComponent.prototype.ngOnInit = function () {
        console.log(this.invoice);
    };
    DetailInvoicesComponent.prototype.openModal = function () {
        this.isDetalInvoice.emit(false);
    };
    __decorate([
        core_1.Input()
    ], DetailInvoicesComponent.prototype, "invoice");
    __decorate([
        core_1.Output()
    ], DetailInvoicesComponent.prototype, "isDetalInvoice");
    DetailInvoicesComponent = __decorate([
        core_1.Component({
            selector: 'app-detail-invoices',
            templateUrl: './detail-invoices.component.html',
            styleUrls: ['./detail-invoices.component.less']
        })
    ], DetailInvoicesComponent);
    return DetailInvoicesComponent;
}());
exports.DetailInvoicesComponent = DetailInvoicesComponent;
