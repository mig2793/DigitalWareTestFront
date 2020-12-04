export class Clients {
    documento: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    email: string;
    fecha_nacimiento: string;

    constructor(_documento?: string, _nombre?: string, _apellidos?: string, _telefono?: string, _email?: string, _fn?: string) {
        this.documento = _documento != null ? _documento : "";
        this.nombres = _nombre != null ? _nombre : "";
        this.apellidos = _apellidos != null ? _apellidos : "";
        this.telefono = _telefono != null ? _telefono : "";
        this.email = _email != null ? _email : "";
        this.fecha_nacimiento = _fn != null ? _fn : "";
    }
}