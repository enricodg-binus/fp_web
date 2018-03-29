import { TestBed, inject } from '@angular/core/testing';

import { DashboardProviderService } from './dashboard.service';

describe('DashboardProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardProviderService]
    });
  });

  it('should be created', inject([DashboardProviderService], (service: DashboardProviderService) => {
    expect(service).toBeTruthy();
  }));
});
