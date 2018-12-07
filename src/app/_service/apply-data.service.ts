import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApplyDataService {
  constructor(private http: HttpClient) {
  }

  getData(path: string) {
    return this.http.get('https://datathon-661fa.firebaseio.com/' + path + '.json');
  }
}
