import { inject, TestBed } from '@angular/core/testing';

import { PunishService } from './punish.service';

describe('PunishService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PunishService]
        });
    });

    it('should be created', inject([PunishService], (service: PunishService) => {
        expect(service).toBeTruthy();
    }));
});
