import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Data} from './data';
import {Observable} from 'rxjs/Observable';
import {Option} from './option';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class DataService {

  private dataUrl: string;

  constructor(private http: HttpClient) {
    this.dataUrl = '/data';
  }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>('http://localhost:9995/api/data');
  }

  saveOne(data: Data): Observable<Data> {
    return this.http.post<Data>('http://localhost:9995/api/data', data, httpOptions);
  }

  search(text: string): Observable<Data[]> {
    return this.http.get<Data[]>('http://localhost:9995/api/search?text='+text);
  }

  getFacetedSearch(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:9995/api/options');
  }
}
