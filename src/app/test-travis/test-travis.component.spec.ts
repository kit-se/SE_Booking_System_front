import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTravisComponent } from './test-travis.component';

describe('TestTravisComponent', () => {
    let component: TestTravisComponent;
    let fixture: ComponentFixture<TestTravisComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TestTravisComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestTravisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});

describe('HowToKarma', () => {
    let component: TestTravisComponent;
    it ('Test', () => {
        expect(component.test).toBe(false);
    })
});