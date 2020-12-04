import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalGeneralService {

  showModal$: Observable<any>;
  private showModalSubject = new Subject<any>();

  showModalError$: Observable<any>;
  private showModalErrorSubject = new Subject<any>();

  showConfirm$: Observable<any>;
  private showConfirmModalSubject = new Subject<any>();

  opcionConfirmSubject: Observable<any>;

  constructor() {
    this.showModal$ = this.showModalSubject.asObservable();
    this.showModalError$ = this.showModalErrorSubject.asObservable();
    this.showConfirm$ = this.showConfirmModalSubject.asObservable();
  }

  modalShow(message: string, modal: any, tittle:string = ""){
    let infoModal = {
      message: message,
      modal:modal,
      tittle:tittle
    }
    this.showModalSubject.next(infoModal);
  }

  modalShowError(error: any, modal: any, message: string = "", tittle:string = "") {
    let infoModal = {
      error:error,
      message:message,
      modal:modal,
      tittle:tittle
    }
    this.showModalErrorSubject.next(infoModal);
  }

  modalConfirm(message, tittle:string=""){
    let infoModal={
      message:message,
      tittle:tittle
    }
    this.showConfirmModalSubject.next(infoModal);
  }
}
