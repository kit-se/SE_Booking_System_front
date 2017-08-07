import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionManageComponent } from './section-manage.component';

describe('SectionManageComponent', () => {
  let component: SectionManageComponent;
  let fixture: ComponentFixture<SectionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
