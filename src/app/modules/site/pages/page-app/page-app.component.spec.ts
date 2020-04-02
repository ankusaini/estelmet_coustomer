/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageAppComponent } from './page-app.component';

describe('PageAppComponent', () => {
  let component: PageAppComponent;
  let fixture: ComponentFixture<PageAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
