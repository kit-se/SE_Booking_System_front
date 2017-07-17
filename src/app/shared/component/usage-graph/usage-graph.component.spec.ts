import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageGraphComponent } from './usage-graph.component';

describe('UsageGraphComponent', () => {
  let component: UsageGraphComponent;
  let fixture: ComponentFixture<UsageGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
