import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:3000';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('dataService connected');
  }

  createTask(task) {
    return this.http.post(`${API_URL}/tasks`, task)
      .map(res => {
        const body = res.text();
        if (body) {
          return JSON.parse(body);
        }
      })
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
    return this.http.delete(`${API_URL}/tasks/${id}`)
    // .map(this.extractData)
    // .catch(this.handleError);
  }

  // private extractData(result) {
  //   return res.text(result) || {};
  // }
}
