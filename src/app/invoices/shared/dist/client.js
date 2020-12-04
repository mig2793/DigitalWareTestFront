"use strict";
exports.__esModule = true;
exports.Clients = void 0;
var Clients = /** @class */ (function () {
    function Clients(_documento, _nombre, _apellidos, _telefono, _email, _fn) {
        this.documento = _documento != null ? _documento : "";
        this.nombres = _nombre != null ? _nombre : "";
        this.apellidos = _apellidos != null ? _apellidos : "";
        this.telefono = _telefono != null ? _telefono : "";
        this.email = _email != null ? _email : "";
        this.fecha_nacimiento = _fn != null ? _fn : "";
    }
    return Clients;
}());
exports.Clients = Clients;
