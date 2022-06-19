import { TestBed } from '@angular/core/testing';
import { CommanderListRoutingModule } from './commander-list-routing.module';

describe('CommanderListRoutingModule', () => {
  let pipe: CommanderListRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CommanderListRoutingModule] });
    pipe = TestBed.inject(CommanderListRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
