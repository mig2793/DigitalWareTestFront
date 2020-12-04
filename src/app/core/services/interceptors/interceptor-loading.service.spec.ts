import { TestBed } from '@angular/core/testing';

import { InterceptorLoadingService } from './interceptor-loading.service';

describe('InterceptorLoadingService', () => {
  let service: InterceptorLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
