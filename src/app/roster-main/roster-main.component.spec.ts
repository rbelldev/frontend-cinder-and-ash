/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RosterMainComponent } from './roster-main.component';

describe('RosterMainComponent', () => {
  let component: RosterMainComponent;
  let fixture: ComponentFixture<RosterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fail', () => {
    expect(false).toBeTruthy();
  });
});
