"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvoicesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var new_invoice_component_1 = require("./components/new-invoice/new-invoice.component");
var view_invoices_component_1 = require("./components/view-invoices/view-invoices.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var routes = [
    {
        path: '',
        component: navigation_component_1.NavigationComponent,
        children: [
            {
                path: '',
                component: view_invoices_component_1.ViewInvoicesComponent
            },
            {
                path: 'crear-factura',
                component: new_invoice_component_1.NewInvoiceComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '/'
            }
        ]
    }
];
var InvoicesRoutingModule = /** @class */ (function () {
    function InvoicesRoutingModule() {
    }
    InvoicesRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], InvoicesRoutingModule);
    return InvoicesRoutingModule;
}());
exports.InvoicesRoutingModule = InvoicesRoutingModule;
