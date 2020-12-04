import { Products } from './products';

export class DetailInvoice {
    id: number;
    id_factura: number;
    id_producto: number;
    precio: number;
    productos: Products;
    cantidad: number;
}