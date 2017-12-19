import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(public _http: Http) { }

  getJSON(url: string) {
    return this._http.get(url).map((response: Response) => response.json());
  }
}
