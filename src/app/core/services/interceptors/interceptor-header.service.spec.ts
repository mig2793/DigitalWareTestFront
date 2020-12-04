import { TestBed } from '@angular/core/testing';

import { InterceptorHeaderService } from './interceptor-header.service';

describe('InterceptorHeaderService', () => {
  let service: InterceptorHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
