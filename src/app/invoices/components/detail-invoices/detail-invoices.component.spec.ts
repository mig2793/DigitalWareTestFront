import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInvoicesComponent } from './detail-invoices.component';

describe('DetailInvoicesComponent', () => {
  let component: DetailInvoicesComponent;
  let fixture: ComponentFixture<DetailInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
