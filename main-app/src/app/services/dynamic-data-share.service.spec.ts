import { TestBed } from '@angular/core/testing';

import { DynamicDataShareService } from './dynamic-data-share.service';

describe('DynamicDataShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicDataShareService = TestBed.get(DynamicDataShareService);
    expect(service).toBeTruthy();
  });
});
