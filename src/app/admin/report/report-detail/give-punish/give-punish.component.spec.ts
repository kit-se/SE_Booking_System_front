import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivePunishComponent } from './give-punish.component';

describe('GivePunishComponent', () => {
  let component: GivePunishComponent;
  let fixture: ComponentFixture<GivePunishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivePunishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivePunishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
