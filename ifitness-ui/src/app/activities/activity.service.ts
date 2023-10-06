import { AuthService } from './../security/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activitiesUrl = 'http://localhost:8080/activities';
  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  list(): Promise<any> {
    return this.http.get(`${this.activitiesUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.activitiesUrl}/user/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
