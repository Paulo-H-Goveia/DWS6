import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activitiesUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  list(): Promise<any> {
    return this.http.get(`${this.activitiesUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
