"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalSharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var directives_directive_1 = require("../../directive/directives.directive");
var modal_component_1 = require("./modal-general/modal.component");
var ModalSharedModule = /** @class */ (function () {
    function ModalSharedModule() {
    }
    ModalSharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                modal_component_1.ModalComponent,
                directives_directive_1.CloseModal
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [modal_component_1.ModalComponent,
                directives_directive_1.CloseModal,
            ]
        })
    ], ModalSharedModule);
    return ModalSharedModule;
}());
exports.ModalSharedModule = ModalSharedModule;
