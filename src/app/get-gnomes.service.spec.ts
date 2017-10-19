import { TestBed, inject } from '@angular/core/testing';

import { GetGnomesService } from './get-gnomes.service';

describe('GetGnomesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGnomesService]
    });
  });

  it('should be created', inject([GetGnomesService], (service: GetGnomesService) => {
    expect(service).toBeTruthy();
  }));
});
