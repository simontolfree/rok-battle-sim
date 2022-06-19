import { TestBed } from '@angular/core/testing';
import { CommanderListData } from './commander-list-data';

describe('CommanderListData', () => {
  let service: CommanderListData;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CommanderListData] });
    spyOn(CommanderListData.prototype, 'initMainChart');
    service = TestBed.inject(CommanderListData);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(CommanderListData.prototype.initMainChart).toHaveBeenCalled();
    });
  });
});
