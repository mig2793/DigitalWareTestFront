import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHeaderService {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = "Bearer AAAAAAAAAAAAAAAAAAAAAF6CJgEAAAAA%2FrqeAr8qKg%2FCYoubWVeNJXaFO2g%3DCWSdVUVQhe9G6BXQIYUk7h5eKbMWpbHPIoAIFlCyhSXFQWjlkK";
    let setHeaders;
    setHeaders = { Authorization: token }
    request = request.clone({
      setHeaders
    });
    return next.handle(request);
  }
}
