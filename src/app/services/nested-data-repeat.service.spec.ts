import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NestedDataRepeatService } from './nested-data-repeat.service';

describe('NestedDataRepeatService', () => {
  let service: NestedDataRepeatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NestedDataRepeatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
