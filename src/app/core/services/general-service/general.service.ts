import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constants: any;
  constructor(
    private http: HttpClient) {
  }

  protected get(url: string) {
    return this.http
      .get<any>(url)
      .pipe(
        map((response) => {
          return response;
        }));
  }

  protected post(url: string, parametros: any) {
    return this.http
      .post<any>(url, parametros)
      .pipe(
        map((response) => {
          return response;
        }));
  }

  protected put(url: string, parametros: any) {
    return this.http
      .put<any>(url, parametros)
      .pipe(
        map((response) => {
          return response;
        }));
  }

  public delete(url: string, data:any) {
    return this.http
      .delete<any>(url, data)
      .pipe(
        map((response) => {
          return response;
        }));
  }
}
