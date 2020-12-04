import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoices } from '../../shared/invoices';

@Component({
  selector: 'app-detail-invoices',
  templateUrl: './detail-invoices.component.html',
  styleUrls: ['./detail-invoices.component.less']
})
export class DetailInvoicesComponent implements OnInit {

  @Input()
  invoice: Invoices;
  @Output() isDetalInvoice = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.invoice);
  }

  openModal() {
    this.isDetalInvoice.emit(false)
  }

}
