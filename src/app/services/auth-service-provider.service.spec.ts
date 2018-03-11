import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceProviderService } from './auth-service-provider.service';

describe('AuthServiceProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceProviderService]
    });
  });

  it('should be created', inject([AuthServiceProviderService], (service: AuthServiceProviderService) => {
    expect(service).toBeTruthy();
  }));
});
