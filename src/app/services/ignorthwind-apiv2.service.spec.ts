import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IGNorthwindAPIv2Service } from './ignorthwind-apiv2.service';

describe('IGNorthwindAPIv2Service', () => {
  let service: IGNorthwindAPIv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IGNorthwindAPIv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
