import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FinTechAPIService } from './fin-tech-api.service';

describe('FinTechAPIService', () => {
  let service: FinTechAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FinTechAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
