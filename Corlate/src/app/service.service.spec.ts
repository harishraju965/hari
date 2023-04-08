import { TestBed } from '@angular/core/testing';

import { SERVICEService } from './service.service';

describe('SERVICEService', () => {
  let service: SERVICEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SERVICEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
