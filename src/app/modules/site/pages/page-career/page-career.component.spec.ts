/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageCareerComponent } from './page-career.component';

describe('PageCareerComponent', () => {
  let component: PageCareerComponent;
  let fixture: ComponentFixture<PageCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
