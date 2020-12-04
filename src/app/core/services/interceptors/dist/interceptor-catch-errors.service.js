"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InterceptorCatchErrorsService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var modal_1 = require("../../../shared-ui/modules/modal/shared/modal");
var InterceptorCatchErrorsService = /** @class */ (function () {
    function InterceptorCatchErrorsService(modalGeneralService) {
        this.modalGeneralService = modalGeneralService;
        this.re = /authenticate/gi;
        this.recuperarPass = "/user/recuperar";
    }
    InterceptorCatchErrorsService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(operators_1.retry(0), operators_1.catchError(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                errorMessage = "Error: " + error.error.message;
            }
            else {
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
            _this.modalGeneralService.modalShowError(null, modal_1.Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error);
            return rxjs_1.throwError(errorMessage);
        }));
    };
    InterceptorCatchErrorsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InterceptorCatchErrorsService);
    return InterceptorCatchErrorsService;
}());
exports.InterceptorCatchErrorsService = InterceptorCatchErrorsService;
