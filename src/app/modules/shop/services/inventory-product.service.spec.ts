/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InventoryProductService } from './inventory-product.service';

describe('Service: InventoryProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryProductService]
    });
  });

  it('should ...', inject([InventoryProductService], (service: InventoryProductService) => {
    expect(service).toBeTruthy();
  }));
});
