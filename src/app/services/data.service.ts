import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = 'http://localhost:3000';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('dataService connected');
  }

  getTasks() {
    return this.http.get(`${API_URL}/tasks`)
      .map((res) => {
        const body = res.text();
        if (body) {
          return JSON.parse(body);
        }
      });
  }

  deleteTask(id) {
    console.log('delete me', id)
    return this.http.delete(`${API_URL}/tasks/${id}`).subscribe((response) => {
      console.log(response);
    })
      // .map(res => console.log(res))
  }
}
