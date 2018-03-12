import { TestBed, inject } from '@angular/core/testing';

import { NavServiceProviderService } from './nav-service-provider.service';

describe('NavServiceProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavServiceProviderService]
    });
  });

  it('should be created', inject([NavServiceProviderService], (service: NavServiceProviderService) => {
    expect(service).toBeTruthy();
  }));
});
