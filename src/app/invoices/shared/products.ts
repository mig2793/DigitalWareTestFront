import { DetailInvoice } from './detail-invoice';

export class Products {
    codigo_producto: number;
    costo: number;
    detalle_factura: DetailInvoice;
    id_categoria_producto: number;
    producto: string;
    stock: number;
    totalItems: number;
}