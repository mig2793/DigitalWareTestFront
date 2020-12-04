import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ModalGeneralService } from '../../../shared-ui/modules/modal/shared/modal-general.service';
import { Modals } from '../../../shared-ui/modules/modal/shared/modal';

import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InterceptorCatchErrorsService {

  re: any = /authenticate/gi;
  recuperarPass: any = "/user/recuperar";

  constructor(
    private modalGeneralService: ModalGeneralService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          this.modalGeneralService.modalShowError(null, Modals.ID_MESSAGE_PANEL, "Ocurrío un error en el servidor" + error)

          return throwError(errorMessage);
        })
      )
  }
}
