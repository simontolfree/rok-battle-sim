import { TestBed } from '@angular/core/testing';
import { CommanderListModule } from './commander-list.module';

describe('CommanderListModule', () => {
  let pipe: CommanderListModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CommanderListModule] });
    pipe = TestBed.inject(CommanderListModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
