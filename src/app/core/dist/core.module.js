"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var interceptor_loading_service_1 = require("./services/interceptors/interceptor-loading.service");
var http_1 = require("@angular/common/http");
var interceptor_header_service_1 = require("./services/interceptors/interceptor-header.service");
var invoices_module_1 = require("../invoices/invoices.module");
var core_routing_module_1 = require("./core-routing.module");
var loader_component_1 = require("./components/loader/loader.component");
var interceptor_catch_errors_service_1 = require("./services/interceptors/interceptor-catch-errors.service");
var shared_ui_module_1 = require("../shared-ui/shared-ui.module");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [
                loader_component_1.LoaderComponent
            ],
            imports: [
                common_1.CommonModule,
                core_routing_module_1.CoreRoutingModule,
                invoices_module_1.InvoicesModule,
                http_1.HttpClientModule,
                shared_ui_module_1.SharedUiModule
            ],
            exports: [
                http_1.HttpClientModule,
                loader_component_1.LoaderComponent,
                shared_ui_module_1.SharedUiModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_header_service_1.InterceptorHeaderService,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_loading_service_1.InterceptorLoadingService,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_catch_errors_service_1.InterceptorCatchErrorsService,
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
