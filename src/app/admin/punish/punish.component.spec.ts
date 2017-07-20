import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishComponent } from './punish.component';

describe('PunishComponent', () => {
  let component: PunishComponent;
  let fixture: ComponentFixture<PunishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
