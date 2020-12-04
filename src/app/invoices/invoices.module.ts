import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { ViewInvoicesComponent } from './components/view-invoices/view-invoices.component';
import { InvoicesRoutingModule } from './invoices.routing.module';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailInvoicesComponent } from './components/detail-invoices/detail-invoices.component';

@NgModule({
  declarations: [
    NewInvoiceComponent, 
    ViewInvoicesComponent, 
    NavigationComponent, DetailInvoicesComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
