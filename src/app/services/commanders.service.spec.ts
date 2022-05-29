import { TestBed } from '@angular/core/testing';

import { CommandersService } from './commanders.service';

describe('CommandersService', () => {
  let service: CommandersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
