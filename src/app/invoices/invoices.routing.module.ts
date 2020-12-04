import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { ViewInvoicesComponent } from './components/view-invoices/view-invoices.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ViewInvoicesComponent
      },
      {
        path: 'crear-factura',
        component: NewInvoiceComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
