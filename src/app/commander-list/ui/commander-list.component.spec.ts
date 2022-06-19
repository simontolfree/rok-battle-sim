import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommanderListData } from './../data-access/commander-list-data';
import { CommandersService } from 'src/app/services/commanders.service';
import { CommanderListComponent } from './commander-list.component';

describe('CommanderListComponent', () => {
  let component: CommanderListComponent;
  let fixture: ComponentFixture<CommanderListComponent>;

  beforeEach(() => {
    const commanderListDataStub = () => ({});
    const commandersServiceStub = () => ({
      getCommanders: () => ({}),
      commsSelected: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CommanderListComponent],
      providers: [
        { provide: CommanderListData, useFactory: commanderListDataStub },
        { provide: CommandersService, useFactory: commandersServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CommanderListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
