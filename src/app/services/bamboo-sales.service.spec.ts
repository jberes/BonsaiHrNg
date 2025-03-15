import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BambooSalesService } from './bamboo-sales.service';

describe('BambooSalesService', () => {
  let service: BambooSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(BambooSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
