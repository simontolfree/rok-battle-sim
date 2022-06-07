import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderDetailsComponent } from './commander-details.component';

describe('CommanderDetailsComponent', () => {
  let component: CommanderDetailsComponent;
  let fixture: ComponentFixture<CommanderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommanderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
