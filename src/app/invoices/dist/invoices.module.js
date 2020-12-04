"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvoicesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var new_invoice_component_1 = require("./components/new-invoice/new-invoice.component");
var view_invoices_component_1 = require("./components/view-invoices/view-invoices.component");
var invoices_routing_module_1 = require("./invoices.routing.module");
var shared_ui_module_1 = require("../shared-ui/shared-ui.module");
var navigation_component_1 = require("./components/navigation/navigation.component");
var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        core_1.NgModule({
            declarations: [
                new_invoice_component_1.NewInvoiceComponent,
                view_invoices_component_1.ViewInvoicesComponent,
                navigation_component_1.NavigationComponent
            ],
            imports: [
                common_1.CommonModule,
                shared_ui_module_1.SharedUiModule,
                invoices_routing_module_1.InvoicesRoutingModule
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());
exports.InvoicesModule = InvoicesModule;
