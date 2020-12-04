import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from '../../core/services/general-service/general.service';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService extends GeneralService{

  private apiURL: string = environment.apiURL;


  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getInvoices(url: string): Observable<any> {
    return this.get(`${this.apiURL}/api/${url}`)
  }

  public postInvoices(url: string, parametros: any): Observable<any> {
    return this.post(`${this.apiURL}/api/${url}`, parametros);
  }

  public putInvoices(url: string, parametros: any): Observable<any> {
    return this.put(`${this.apiURL}/api/${url}`, parametros);
  }

  public deleteInvoices(url: string, data:any): Observable<any> {
    return this.delete(`${this.apiURL}/api/${url}`, data);
  }


}
