/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import {NavigationBarComponent} from "../app/navigation-bar/navigation-bar.component";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {

  let _fixture;
  let _app;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigationBarComponent
      ],
    });
    TestBed.compileComponents();

    _fixture = TestBed.createComponent(AppComponent);
    _app = _fixture.debugElement.componentInstance;

  });

  it('should contain the navigation bar component', async(() => {

    let navigationBarComponent = _fixture.debugElement.query(By.css('navigation-bar'));
    expect(navigationBarComponent.nativeElement).toBeDefined()

  }));

  it('should contain a alert with the message \'Welcome!\'', async(() => {

    let alertDivDebugElement = _fixture.debugElement.query(By.css('div.alert.alert-success'));

    expect(alertDivDebugElement.nativeElement).toBeDefined();
    expect(alertDivDebugElement.nativeElement.getAttribute('role')).toBe('alert');

    let anchorDebugElement = alertDivDebugElement.query(By.css('a.alert-link'));

    expect(anchorDebugElement.nativeElement).toBeDefined();
    expect(anchorDebugElement.nativeElement.getAttribute('href')).toBe('#');
    expect(anchorDebugElement.nativeElement.innerHTML).toBe('Welcome!');

  }));
});
