import { TestBed, inject } from '@angular/core/testing';

import { AlertProviderService } from './alert-provider.service';

describe('AlertProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertProviderService]
    });
  });

  it('should be created', inject([AlertProviderService], (service: AlertProviderService) => {
    expect(service).toBeTruthy();
  }));
});
