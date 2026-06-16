/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServicessComponent } from './servicess.component';

describe('ServicessComponent', () => {
  let component: ServicessComponent;
  let fixture: ComponentFixture<ServicessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
