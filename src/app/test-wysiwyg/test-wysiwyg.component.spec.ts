import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWysiwygComponent } from './test-wysiwyg.component';

describe('TestWysiwygComponent', () => {
  let component: TestWysiwygComponent;
  let fixture: ComponentFixture<TestWysiwygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWysiwygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
