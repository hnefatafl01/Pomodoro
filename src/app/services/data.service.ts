import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('dataService connected');
  }

  getTasks() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .map(res => res.json());
  }
}
