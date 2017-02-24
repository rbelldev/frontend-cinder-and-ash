import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

export function checkAttribute(debugElement: DebugElement, attribute: string, expectedValue: string) {
  expect(debugElement.nativeElement.getAttribute(attribute))
    .toBe(expectedValue, `Missing '${attribute}' attribute or value was not '${expectedValue}'.`);
}

export function findElementByCssAndAssertExistence(debugElement: DebugElement, cssQueryString: string) : DebugElement {

  try{

    let queriedElement = debugElement.query(By.css(cssQueryString));
    expect(queriedElement).toBeTruthy(`Expected to find '${cssQueryString}', but was not found!`);

    return queriedElement;

  } catch (e){
    fail(`Expected to find '${cssQueryString}', but was not found!`);
  }

  return null
}

export function checkRouterLink(debugElement: DebugElement, expectedRoute: string) {
  checkAttribute(debugElement, 'ng-reflect-router-link', expectedRoute);
}

export function queryForAllElementsByCss(debugElement: DebugElement, cssQueryString: string) : DebugElement[] {
  return debugElement.queryAll(By.css(cssQueryString));
}

export function checkInnerText(debugElement: DebugElement, expectedInnerText: string) {
  expect(debugElement.nativeElement.innerText).toBe(expectedInnerText);
}

