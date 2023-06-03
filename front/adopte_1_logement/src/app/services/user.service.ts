import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'environments/environment';
import { User } from 'app/data/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly url : string = apiUrl + 'user/';

  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(this.url + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.url + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.url + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.url + 'admin', { responseType: 'text' });
  }

  getUser(id : string) : Observable<User> {
    return this.http.get<User>(this.url + id);
  }

  updateUser(user : User) : Observable<User> {
    return this.http.post<User>(this.url + 'update', user);
  }
}
