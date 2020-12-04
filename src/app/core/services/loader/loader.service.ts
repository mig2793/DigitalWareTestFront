import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  show$: Observable<any>;
  private showSubject = new Subject<any>();

  constructor() {
    this.show$ = this.showSubject.asObservable();
   }

  show(){
    this.showSubject.next(true);
  }

  hide(){
    this.showSubject.next(false);
  }
}
