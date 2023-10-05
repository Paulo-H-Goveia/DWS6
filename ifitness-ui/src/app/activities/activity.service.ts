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
  //todo parte que falta do email pegar no git to fernando
  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.activitiesUrl}/user/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
