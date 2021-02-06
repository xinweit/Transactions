import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { data } from './data';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url : string = 'http://localhost:3000/data';

  getData() {
    return this.http.get<data[]>(this.url);
  }
}
