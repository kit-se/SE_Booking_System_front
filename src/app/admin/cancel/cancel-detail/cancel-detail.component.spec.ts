import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDetailComponent } from './cancel-detail.component';

describe('CancelDetailComponent', () => {
    let component: CancelDetailComponent;
    let fixture: ComponentFixture<CancelDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CancelDetailComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CancelDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
