import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Data} from './data';
import {Observable} from 'rxjs/Observable';
import {Option} from './option';
import {User} from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class DataService {

  private dataUrl: string;

  @Output() searchFor = new EventEmitter<string>();

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
    return this.http.get<Data[]>('http://localhost:9995/api/search?text=' + text, httpOptions);
  }

  getFacetedSearch(): Observable<Option[]> {
    return this.http.get<Option[]>('http://localhost:9995/api/options');
  }

  saveOption(option: Option): Observable<Option> {
    return this.http.post<Option>('http://localhost:9995/api/option', option, httpOptions);
  }
}
