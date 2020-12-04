import { TestBed } from '@angular/core/testing';

import { InterceptorCatchErrorsService } from './interceptor-catch-errors.service';

describe('InterceptorCatchErrorsService', () => {
  let service: InterceptorCatchErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorCatchErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
