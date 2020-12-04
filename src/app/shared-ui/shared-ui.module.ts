import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ModalSharedModule } from './modules/modal/modal-shared.module';

@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FilterPipe,
    ModalSharedModule
  ]
})
export class SharedUiModule { }
