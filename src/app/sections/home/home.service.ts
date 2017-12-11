import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  private _url = '/assets/json/lastnews.json';

  constructor(public _http: Http) { }

  getJSON(){
    return this._http.get(this._url).map((response: Response) => response.json());
  }
}
