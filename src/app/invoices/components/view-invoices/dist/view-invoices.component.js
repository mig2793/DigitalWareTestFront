"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewInvoicesComponent = void 0;
var core_1 = require("@angular/core");
var invoices_1 = require("../../shared/invoices");
var modal_1 = require("../../../shared-ui/modules/modal/shared/modal");
var ViewInvoicesComponent = /** @class */ (function () {
    function ViewInvoicesComponent(invoicesService, modalGeneralService) {
        this.invoicesService = invoicesService;
        this.modalGeneralService = modalGeneralService;
        this.openModal = false;
        this.invoices = new Array();
        this.invoiceSelect = new invoices_1.Invoices();
    }
    ViewInvoicesComponent.prototype.ngOnInit = function () {
        this.getInvoices();
    };
    ViewInvoicesComponent.prototype.getInvoices = function () {
        var _this = this;
        var url = "Facturacion";
        this.invoicesService.getInvoices(url).subscribe(function (res) {
            _this.invoices = res;
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    ViewInvoicesComponent.prototype.searchInvoices = function () {
        var _this = this;
        var url = "Facturacion?item=" + this.search + "&option=" + this.optionSearch;
        this.invoicesService.getInvoices(url).subscribe(function (res) {
            _this.invoices = res;
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    ViewInvoicesComponent.prototype.changeInputSearch = function () {
        if (this.search == "")
            this.getInvoices();
    };
    ViewInvoicesComponent.prototype.deleteInvoice = function (invoice) {
        var _this = this;
        delete invoice["forma_pago"];
        delete invoice["clientes"];
        invoice.detalle_factura.map(function (res) {
            res.productos = null;
        });
        var url = "Facturacion/delete";
        this.invoicesService.postInvoices(url, invoice).subscribe(function (res) {
            _this.getInvoices();
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    ViewInvoicesComponent = __decorate([
        core_1.Component({
            selector: 'app-view-invoices',
            templateUrl: './view-invoices.component.html',
            styleUrls: ['./view-invoices.component.less']
        })
    ], ViewInvoicesComponent);
    return ViewInvoicesComponent;
}());
exports.ViewInvoicesComponent = ViewInvoicesComponent;
