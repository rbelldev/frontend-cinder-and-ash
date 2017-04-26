import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CinderAndAshService {

  constructor(private http: Http) { }

  postGuildApplication(application:string){
    let path = "https://dev-cinder-and-ash-api.herokuapp.com/application";
    return this.http.post(path, application).subscribe(() => {});
  }

}
