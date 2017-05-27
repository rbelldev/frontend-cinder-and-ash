// import {async, ComponentFixture, TestBed} from "@angular/core/testing";
// import {NavigationBarComponent} from "./navigation-bar.component";
// import {RouterTestingModule} from "@angular/router/testing";
// import {By} from "@angular/platform-browser";
// import * as TestHelper from "../../spec/TestHelper";
// import {Router} from "@angular/router";
// import {checkAttribute} from "../../spec/TestHelper";
//
// describe('NavigationBarComponent', () => {
//   let component: NavigationBarComponent;
//   let fixture: ComponentFixture<NavigationBarComponent>;
//
//   let mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   };
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [MaterialModule, RouterTestingModule],
//       declarations: [NavigationBarComponent]
//     })
//       .compileComponents().then(() => {
//       fixture = TestBed.createComponent(NavigationBarComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
//   }));
//
//   describe('Component', () => {
//
//     it('should have an array of navigation items', () => {
//
//       let expectedNavigationArray = [
//         {displayText: 'Home', routerLink: '/home', icon: 'home'},
//         {displayText: 'Roster', routerLink: '/roster', icon: 'assignment'},
//         {displayText: 'Raid Logs', routerLink: '/raid-logs', icon: 'assessment'}
//       ];
//
//       let actualNavigationItems = component.navigationItems;
//
//       expect(actualNavigationItems.length).toBe(expectedNavigationArray.length);
//
//       for (let i = 0; i < actualNavigationItems.length; i++) {
//         expect(actualNavigationItems[i].displayText).toBe(expectedNavigationArray[i].displayText);
//         expect(actualNavigationItems[i].routerLink).toBe(expectedNavigationArray[i].routerLink);
//         expect(actualNavigationItems[i].icon).toBe(expectedNavigationArray[i].icon);
//       }
//
//     });
//
//   });
//
//   describe('html', () => {
//
//     it('should have a toolbar', () => {
//
//       let toolbarElement = TestHelper.findElementByCssAndAssertExistence(fixture.debugElement, 'div md-toolbar');
//       TestHelper.checkAttribute(toolbarElement, 'color', 'primary');
//
//       let buttonElement = TestHelper.findElementByCssAndAssertExistence(toolbarElement, 'button');
//       let mdIconElement = TestHelper.findElementByCssAndAssertExistence(buttonElement, 'md-icon');
//
//       TestHelper.checkInnerText(mdIconElement, 'more_vert');
//
//       let spanElement = TestHelper.findElementByCssAndAssertExistence(toolbarElement, 'span.hand-hover');
//       TestHelper.checkRouterLink(spanElement, '/home');
//
//     });
//
//     it('should have a side navigation container', async(() => {
//
//       let mdSidenavContainerElement = TestHelper.findElementByCssAndAssertExistence(fixture.debugElement, 'div md-sidenav-container');
//       let mdSidenavElement = TestHelper.findElementByCssAndAssertExistence(mdSidenavContainerElement, 'md-sidenav.sidenav');
//       checkAttribute(mdSidenavElement, 'mode', 'side');
//
//       let containerDivElement = TestHelper.findElementByCssAndAssertExistence(fixture.debugElement, 'div.container');
//       TestHelper.findElementByCssAndAssertExistence(containerDivElement, 'router-outlet');
//
//       let expectedNavigationItems = [
//         {displayText: 'FirstLink', routerLink: '/FirstLink', icon: 'FirstIcon'},
//         {displayText: 'SecondLink', routerLink: '/SecondLink', icon: 'SecondIcon'},
//         {displayText: 'ThirdLink', routerLink: '/ThirdLink', icon: 'ThirdIcon'},
//       ];
//
//       component.navigationItems = expectedNavigationItems;
//
//       fixture.detectChanges();
//       fixture.whenStable().then(() =>{
//         fixture.detectChanges();
//         let mdListElement = TestHelper.findElementByCssAndAssertExistence(mdSidenavContainerElement, 'md-list');
//         let allMdListItems = TestHelper.queryForAllElementsByCss(mdListElement, 'md-list-item');
//
//         expect(allMdListItems.length).toBe(3);
//
//         for (let i = 0; i < expectedNavigationItems.length; i++) {
//           let listItemButtonElement = TestHelper.findElementByCssAndAssertExistence(allMdListItems[i], 'button');
//           TestHelper.checkRouterLink(listItemButtonElement, expectedNavigationItems[i].routerLink);
//           TestHelper.checkAttribute(listItemButtonElement, 'routerLinkActive', 'mat-accent');
//
//           // let mdIconElement = TestHelper.findElementByCssAndAssertExistence(listItemButtonElement, 'md-icon');
//           // TestHelper.checkInnerText(mdIconElement, expectedNavigationItems[i].icon);
//
//           // let spanElement = TestHelper.findElementByCssAndAssertExistence(listItemButtonElement, 'span');
//           // TestHelper.checkInnerText(spanElement, expectedNavigationItems[i].displayText);
//         }
//
//       });
//
//     }));
//
//   })
//
// });
