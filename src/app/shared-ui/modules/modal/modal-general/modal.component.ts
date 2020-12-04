import { Component, OnInit } from '@angular/core';

import { Subscription } from "rxjs";
import { timer } from "rxjs";
import { ModalGeneralService } from '../shared/modal-general.service';
import { Modals } from '../shared/modal';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  private subscription: Subscription;
  messageModal: String = "";
  messagePanel: String = "";
  messageConfirm: String = "";
  stateMessage = "";
  elementoAbierto: HTMLElement;
  tittleModal = "";
  timer: any;

  MODALS = {
    ERROR: Modals.ERROR,
    OK: Modals.OK,
    ID_MESSAGE_PANEL: Modals.ID_MESSAGE_PANEL
  }

  constructor(
    private modalGeneralService: ModalGeneralService
  ) {
  }

  ngOnInit() {
    this.initServiceModalGeneral();
  }

  messageshow(elementId: any, state: string = "ok", tittle: string) {
    let element = <HTMLElement>document.querySelector(elementId);
    this.elementoAbierto = element;
    this.stateMessage = state;
    this.tittleModal = tittle;
    element.style.display = "block";
    element.style.backgroundColor = state == "error" ? "#fb4d21" : "#22499A";

    if (elementId == Modals.ID_MESSAGE_PANEL) {
      if (this.subscription != undefined) {
        this.subscription.unsubscribe();
      }
      this.hidePanelTime(elementId);
    }
  }

  closeModal() {
    this.elementoAbierto.style.display = "none";
    let panelModal = <HTMLElement>document.querySelector(Modals.ID_MESSAGE_MODAL)
    if (panelModal.style.display != "none")
      panelModal.style.display = "none";
  }

  messagehide(elementId: any) {
    let element = document.querySelector(elementId);
    if (element != null) { element.style.display = "none" };
  }

  hidePanelTime(element: any) {
    this.timer = timer(10000);
    this.subscription = this.timer.subscribe(t => {
      this.messagehide(element)
    });
  }

  modalShow(message: string, modal: any, tittle: string) {
    this.validateTypeModalMessage(modal, message);
    this.messageshow(modal, Modals.OK, tittle);
  }

  modalShowError(errorResponse: HttpErrorResponse, modal: any, message: string = "", tittle: string) {
    let errorMsj;
    if (message == "") {
      errorMsj = this.getMensajeError(errorResponse);
      this.validateTypeModalMessage(modal, errorMsj);
    } else {
      this.validateTypeModalMessage(modal, message);
    }
    this.messageshow(modal, Modals.ERROR, tittle);
  }

  public getMensajeError(errorResponse: HttpErrorResponse): string {
    let errorMsj;
    if (errorResponse && errorResponse.error) {
      errorMsj = errorResponse.error.mensaje ? errorResponse.error.mensaje : "Ha ocurrido un error con la conexión. " + errorResponse.message;
    } else {
      errorMsj = "Ocurrió un error con la conexión al servidor."
    }

    return errorMsj;
  }

  private modalConfirm(message: String = "", tittle) {
    this.messageConfirm = message
    let element = <HTMLElement>document.querySelector(Modals.ID_CONFIRM_MODAL);
    this.elementoAbierto = element;
    element.style.display = "block";
    this.tittleModal = tittle;
  }

  validateTypeModalMessage(modal: any, message: String) {
    if (modal.includes(Modals.ID_MESSAGE_PANEL))
      this.messagePanel = message;
    else if (modal.includes(Modals.ID_MESSAGE_MODAL))
      this.messageModal = message
  }

  closeConfirm(opc: boolean) {
    let element = <HTMLElement>document.querySelector(Modals.ID_CONFIRM_MODAL);
    element.style.display = "none";
    if (opc) {
      this.modalGeneralService.opcionConfirmSubject.subscribe();
    }
  }

  private initServiceModalGeneral() {
    this.modalGeneralService.showModal$.subscribe((data) => {
      this.modalShow(data.message, data.modal, data.tittle)
    });

    this.modalGeneralService.showModalError$.subscribe((data) => {
      this.modalShowError(data.error, data.modal, data.message, data.tittle);
    });

    this.modalGeneralService.showConfirm$.subscribe((data) => {
      this.modalConfirm(data.message, data.tittle);
    })
  }

}
