import { TestBed, inject } from '@angular/core/testing';

import { E2EImportsModule } from 'e2e-imports.module';
import { ProjectorMessageRepositoryService } from './projectormessage-repository.service';

describe('ProjectorMessageRepositoryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [E2EImportsModule],
            providers: [ProjectorMessageRepositoryService]
        });
    });

    it('should be created', inject(
        [ProjectorMessageRepositoryService],
        (service: ProjectorMessageRepositoryService) => {
            expect(service).toBeTruthy();
        }
    ));
});
