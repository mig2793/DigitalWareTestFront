"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewInvoiceComponent = void 0;
var core_1 = require("@angular/core");
var products_1 = require("../../shared/products");
var client_1 = require("../../shared/client");
var modal_1 = require("../../../shared-ui/modules/modal/shared/modal");
var rxjs_1 = require("rxjs");
var invoices_1 = require("../../shared/invoices");
var NewInvoiceComponent = /** @class */ (function () {
    function NewInvoiceComponent(invoicesService, modalGeneralService) {
        this.invoicesService = invoicesService;
        this.modalGeneralService = modalGeneralService;
        this.modalProducts = true;
        this.totalValueInvoice = 0;
        this.isDocument = false;
        this.productSearch = "";
        this.products = new products_1.Products();
        this.cliente = new client_1.Clients();
        this.productsAdd = new Array();
        this.invoice = new invoices_1.Invoices();
    }
    NewInvoiceComponent.prototype.ngOnInit = function () {
        this.searchProducts();
    };
    NewInvoiceComponent.prototype.searchProducts = function () {
        var _this = this;
        var url = "Productos";
        this.invoicesService.getInvoices(url).subscribe(function (res) {
            _this.products = res;
            console.log(_this.products);
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurí un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.addProduct = function (product) {
        var productFilter = this.productsAdd.filter(function (item) { return item.codigo_producto == product.codigo_producto; });
        if (productFilter.length > 0) {
            productFilter[0].totalItems++;
        }
        else {
            product.totalItems = 0;
            product.totalItems++;
            this.productsAdd.push(product);
        }
        this.addValueItems();
    };
    NewInvoiceComponent.prototype.addValueItems = function () {
        var _this = this;
        this.totalValueInvoice = 0;
        this.productsAdd.forEach(function (res) {
            _this.totalValueInvoice += Number(res.costo) * (res.totalItems);
        });
    };
    NewInvoiceComponent.prototype.removeItem = function (product) {
        this.productsAdd = this.productsAdd.filter(function (item) { return item.codigo_producto != product.codigo_producto; });
        this.addValueItems();
    };
    NewInvoiceComponent.prototype.getClient = function () {
        var _this = this;
        var url = "Cliente/" + this.cliente.documento;
        this.invoicesService.getInvoices(url).subscribe(function (res) {
            if (res != null) {
                _this.cliente = res;
                delete _this.cliente["factura"];
                var date = new Date(_this.cliente.fecha_nacimiento);
                _this.cliente.fecha_nacimiento = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + String(date.getDate()).padStart(2, '0');
                _this.isDocument = true;
            }
            else {
                _this.cliente = new client_1.Clients(_this.cliente.documento);
                _this.isDocument = false;
            }
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurí un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.saveClient = function (formSubmit) {
        var submit = !formSubmit.form.valid ? false : true;
        if (submit) {
            if (this.isDocument)
                this.updateClient();
            else
                this.insertClient();
        }
        else {
            this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Debes completar todos los campos antes de continuar");
        }
    };
    NewInvoiceComponent.prototype.insertClient = function () {
        var _this = this;
        var url = "Cliente";
        this.invoicesService.postInvoices(url, this.cliente).subscribe(function (res) {
            _this.cliente.documento = res.documento;
            if (_this.cliente.documento) {
                _this.modalGeneralService.modalShow("Se guardó el cliente correctamente", modal_1.Modals.ID_MESSAGE_PANEL);
            }
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.updateClient = function () {
        var _this = this;
        var url = "Cliente";
        this.invoicesService.putInvoices(url, this.cliente).subscribe(function (res) {
            _this.cliente = res;
            if (_this.cliente.documento) {
                _this.modalGeneralService.modalShow("Se actualizó el cliente correctamente", modal_1.Modals.ID_MESSAGE_PANEL);
                _this.isDocument = true;
            }
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.checkIn = function () {
        var _this = this;
        if (this.isDocument && this.productsAdd.length > 0) {
            this.modalGeneralService.modalConfirm("\n      \u00BFEst\u00E1s seguro que quiere registrar esta factura? <br/> </b>?\n      ", 'CONFIRMA');
            this.modalGeneralService.opcionConfirmSubject = new rxjs_1.Observable(function (subscriber) {
                _this.invoice.total_factura = _this.totalValueInvoice;
                _this.invoice.id_cliente = _this.cliente.documento;
                _this.invoice.id_forma_pago = 1;
                _this.invoice.detalle_factura = [];
                _this.productsAdd.forEach(function (res) {
                    _this.invoice.detalle_factura.push({
                        id: null,
                        id_factura: null,
                        id_producto: res.codigo_producto,
                        precio: res.costo * res.totalItems,
                        productos: null,
                        cantidad: res.totalItems
                    });
                });
                subscriber.next(_this.saveCheckIn());
                subscriber.complete();
            });
        }
        else {
            this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Debes registrar el usuario antes de continuar. Debes registrar como mínimo un producto.");
        }
    };
    NewInvoiceComponent.prototype.saveCheckIn = function () {
        var _this = this;
        var url = "Facturacion";
        this.invoicesService.postInvoices(url, this.invoice).subscribe(function (res) {
            if (res) {
                _this.invoice = new invoices_1.Invoices();
                _this.cliente = new client_1.Clients();
                _this.productsAdd = new Array();
                _this.modalGeneralService.modalShow("Se guardó la factura correctamente", modal_1.Modals.ID_MESSAGE_MODAL);
            }
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.searchItem = function () {
        var _this = this;
        var url = "Productos?item=" + this.productSearch;
        this.invoicesService.getInvoices(url).subscribe(function (res) {
            _this.products = res;
        }, function (error) {
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrí0 un error en el servidor" + error);
        });
    };
    NewInvoiceComponent.prototype.changeInputSearch = function () {
        if (this.productSearch == "")
            this.searchProducts();
    };
    NewInvoiceComponent = __decorate([
        core_1.Component({
            selector: 'app-new-invoice',
            templateUrl: './new-invoice.component.html',
            styleUrls: ['./new-invoice.component.less']
        })
    ], NewInvoiceComponent);
    return NewInvoiceComponent;
}());
exports.NewInvoiceComponent = NewInvoiceComponent;
