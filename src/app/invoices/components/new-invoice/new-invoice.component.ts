import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../shared/invoices.service';
import { Products } from '../../shared/products';
import { Clients } from '../../shared/client';
import { ModalGeneralService } from '../../../shared-ui/modules/modal/shared/modal-general.service';
import { Modals } from '../../../shared-ui/modules/modal/shared/modal';
import { Observable } from 'rxjs';
import { Invoices } from '../../shared/invoices';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.less']
})
export class NewInvoiceComponent implements OnInit {

  modalProducts: boolean = true;
  products: Products;
  productsAdd: Array<Products>;
  totalValueInvoice: number = 0;
  cliente: Clients;
  isDocument: boolean = false;
  productSearch: string = "";
  invoice: Invoices;

  constructor(private invoicesService: InvoicesService,
    private modalGeneralService: ModalGeneralService) {
    this.products = new Products();
    this.cliente = new Clients();
    this.productsAdd = new Array<Products>()
    this.invoice = new Invoices();
  }

  ngOnInit(): void {
    this.searchProducts();
  }

  searchProducts() {
    let url = "Productos";
    this.invoicesService.getInvoices(url).subscribe(res => {
      this.products = res;
      console.log(this.products);
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurí un error en el servidor" + error)
    })
  }

  addProduct(product: Products) {
    let productFilter = this.productsAdd.filter(item => item.codigo_producto == product.codigo_producto);
    if (productFilter.length > 0) {
      productFilter[0].totalItems++;
    } else {
      product.totalItems = 0;
      product.totalItems++;
      this.productsAdd.push(product);
    }
    this.addValueItems();
  }

  addValueItems() {
    this.totalValueInvoice = 0;
    this.productsAdd.forEach(res => {
      this.totalValueInvoice += Number(res.costo) * (res.totalItems);
    })
  }

  removeItem(product: Products) {
    this.productsAdd = this.productsAdd.filter(item => item.codigo_producto != product.codigo_producto);
    this.addValueItems();
  }

  getClient() {
    let url = `Cliente/${this.cliente.documento}`;
    this.invoicesService.getInvoices(url).subscribe(res => {
      if (res != null) {
        this.cliente = res;
        delete this.cliente["factura"];
        let date = new Date(this.cliente.fecha_nacimiento)
        this.cliente.fecha_nacimiento = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
        this.isDocument = true;
      }
      else {
        this.cliente = new Clients(this.cliente.documento);
        this.isDocument = false;
      }
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurí un error en el servidor" + error)
    })
  }

  saveClient(formSubmit) {
    let submit = !formSubmit.form.valid ? false : true;
    if (submit) {
      if (this.isDocument) this.updateClient();
      else this.insertClient();
    } else {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Debes completar todos los campos antes de continuar")
    }
  }

  insertClient() {
    let url = `Cliente`;
    this.invoicesService.postInvoices(url, this.cliente).subscribe(res => {
      this.cliente.documento = res.documento;
      if (this.cliente.documento) {
        this.modalGeneralService.modalShow("Se guardó el cliente correctamente", Modals.ID_MESSAGE_PANEL)
      }
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

  updateClient() {
    let url = `Cliente`;
    this.invoicesService.putInvoices(url, this.cliente).subscribe(res => {
      this.cliente = res;
      if (this.cliente.documento) {
        this.modalGeneralService.modalShow("Se actualizó el cliente correctamente", Modals.ID_MESSAGE_PANEL)
        this.isDocument = true;
      }
    }, error => {

      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

  checkIn() {
    if (this.isDocument && this.productsAdd.length > 0) {
      this.modalGeneralService.modalConfirm(`
      ¿Estás seguro que quiere registrar esta factura? <br/> </b>?
      `, 'CONFIRMA')
      this.modalGeneralService.opcionConfirmSubject = new Observable(subscriber => {
        this.invoice.total_factura = this.totalValueInvoice;
        this.invoice.id_cliente = this.cliente.documento;
        this.invoice.id_forma_pago = 1;
        this.invoice.detalle_factura = [];
        this.productsAdd.forEach(res => {
          this.invoice.detalle_factura.push(
            {
              id: null,
              id_factura: null,
              id_producto: res.codigo_producto,
              precio: res.costo * res.totalItems,
              productos: null,
              cantidad: res.totalItems,
            }
          )
        })
        subscriber.next(this.saveCheckIn());
        subscriber.complete();
      })
    } else {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Debes registrar el usuario antes de continuar. Debes registrar como mínimo un producto.")
    }

  }

  saveCheckIn() {
    let url = `Facturacion`;
    this.invoicesService.postInvoices(url, this.invoice).subscribe(res => {
      if (res) {
        this.invoice = new Invoices();
        this.cliente = new Clients();
        this.productsAdd = new Array<Products>();
        this.modalGeneralService.modalShow("Se guardó la factura correctamente", Modals.ID_MESSAGE_MODAL)
      }
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

  searchItem() {
    let url = "Productos?item=" + this.productSearch;
    this.invoicesService.getInvoices(url).subscribe(res => {
      this.products = res;
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrí0 un error en el servidor" + error)
    })
  }

  changeInputSearch() {
    if (this.productSearch == "")
      this.searchProducts();
  }
}
