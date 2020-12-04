import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../shared/invoices.service';
import { Invoices } from '../../shared/invoices';
import { ModalGeneralService } from '../../../shared-ui/modules/modal/shared/modal-general.service';
import { Modals } from '../../../shared-ui/modules/modal/shared/modal';

@Component({
  selector: 'app-view-invoices',
  templateUrl: './view-invoices.component.html',
  styleUrls: ['./view-invoices.component.less']
})
export class ViewInvoicesComponent implements OnInit {

  invoices: Array<Invoices>;
  invoiceSelect: Invoices;
  openModal: boolean = false;
  optionSearch: string;
  search: string;
  selectUndefinedOptionValue: any;

  constructor(
    private invoicesService: InvoicesService,
    private modalGeneralService: ModalGeneralService
  ) {
    this.invoices = new Array<Invoices>();
    this.invoiceSelect = new Invoices();
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    let url = "Facturacion";
    this.invoicesService.getInvoices(url).subscribe(res => {
      this.invoices = res;
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

  searchInvoices(){
    let url = `Facturacion?item=${this.search}&option=${this.optionSearch}`;
    this.invoicesService.getInvoices(url).subscribe(res => {
      this.invoices = res;
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

  changeInputSearch(){
    if(this.search == "")
      this.getInvoices();
  }

  deleteInvoice(invoice:Invoices){
    delete invoice["forma_pago"];
    delete invoice["clientes"];
    invoice.detalle_factura.map(res=>{
      res.productos = null;
    })
    let url = `Facturacion/delete`;
    this.invoicesService.postInvoices(url,invoice).subscribe(res => {
      this.getInvoices();
    }, error => {
      this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)
    })
  }

}
