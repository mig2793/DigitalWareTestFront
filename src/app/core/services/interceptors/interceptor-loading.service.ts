import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorLoadingService {

  service_count = 0;
  constructor(private spinner: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.spinner.show();
      this.service_count++;
      return next.handle(req).pipe(
          finalize(
              () => {
                  this.service_count--;
                  if (this.service_count === 0) {
                      this.spinner.hide()
                  }
              }
          )
      );
  }
}
