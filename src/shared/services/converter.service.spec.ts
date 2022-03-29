import { TestBed } from '@angular/core/testing';
import { ConverterService } from './converter.service';

describe('converterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConverterService],
    });
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    const service: ConverterService = TestBed.inject(ConverterService);
    expect(service).toBeTruthy();
  });
});
