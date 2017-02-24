import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LogResolver implements Resolve<any> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.contactsService.getContact(route.params['id']);
    return route.params['id'];
  }
}
