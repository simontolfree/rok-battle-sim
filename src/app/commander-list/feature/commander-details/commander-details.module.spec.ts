import { TestBed } from '@angular/core/testing';
import { CommanderDetailsModule } from './commander-details.module';

describe('CommanderDetailsModule', () => {
  let pipe: CommanderDetailsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CommanderDetailsModule] });
    pipe = TestBed.inject(CommanderDetailsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
