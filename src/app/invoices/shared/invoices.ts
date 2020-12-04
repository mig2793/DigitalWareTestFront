import { Clients } from './client';
import { DetailInvoice } from './detail-invoice';

export class Invoices{
    clientes: Clients;
    detalle_factura: Array<DetailInvoice>;
    fecha: string;
    forma_pago: any;
    id: number;
    id_cliente: string;
    id_forma_pago: number;
    total_factura: number;

    constructor(){
        this.detalle_factura = new Array<DetailInvoice>();
    }
}