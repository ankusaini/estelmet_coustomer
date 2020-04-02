/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTradeComponent } from './page-trade.component';

describe('PageTradeComponent', () => {
  let component: PageTradeComponent;
  let fixture: ComponentFixture<PageTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
