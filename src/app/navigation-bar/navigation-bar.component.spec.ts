import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {NavigationBarComponent} from "./navigation-bar.component";
import {MaterialModule} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [NavigationBarComponent]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(NavigationBarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('Component', () => {

    it('should have an array of navigation items', () => {

      let expectedNavigationArray = [
        {displayText: 'Home', routerLink: '/home', icon: 'home'},
        {displayText: 'Roster', routerLink: '/roster', icon: 'assignment'},
        {displayText: 'Raid Logs', routerLink: '/raid-logs', icon: 'assessment'}
      ];

      let actualNavigationItems = component.navigationItems;

      expect(actualNavigationItems.length).toBe(expectedNavigationArray.length);

      for (let i = 1; i < actualNavigationItems.length; i++){
        expect(actualNavigationItems[i].displayText).toBe(expectedNavigationArray[i].displayText);
        expect(actualNavigationItems[i].routerLink).toBe(expectedNavigationArray[i].routerLink);
        expect(actualNavigationItems[i].icon).toBe(expectedNavigationArray[i].icon);
      }

    });

  });

  describe('html', () => {

    it('should have an array of navigation items', () => {

    })

  })

});
