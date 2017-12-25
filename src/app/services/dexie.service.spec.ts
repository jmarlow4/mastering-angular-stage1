import { TestBed, inject } from '@angular/core/testing';

import { DexieService } from './dexie.service';

describe('DexieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DexieService]
    });
  });

  it('should be created', inject([DexieService], (service: DexieService) => {
    expect(service).toBeTruthy();
  }));
});
