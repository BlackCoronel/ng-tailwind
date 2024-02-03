import { TestBed } from '@angular/core/testing';

import { NgTailwindcssService } from './ng-tailwindcss.service';

describe('NgTailwindcssService', () => {
  let service: NgTailwindcssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTailwindcssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
