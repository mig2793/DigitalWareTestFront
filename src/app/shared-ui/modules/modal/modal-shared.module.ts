import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseModal } from '../../directive/directives.directive';
import { ModalComponent } from './modal-general/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    CloseModal],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, 
            CloseModal,
          ]
})
export class ModalSharedModule {

  constructor() {}
}
