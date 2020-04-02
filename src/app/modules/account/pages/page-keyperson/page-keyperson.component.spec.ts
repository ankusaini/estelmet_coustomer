/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageKeypersonComponent } from './page-keyperson.component';

describe('PageKeypersonComponent', () => {
  let component: PageKeypersonComponent;
  let fixture: ComponentFixture<PageKeypersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageKeypersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageKeypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
