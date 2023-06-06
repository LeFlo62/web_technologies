import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/data/user';
import { apiUrl } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  private readonly url : string = apiUrl + 'admin/';

  constructor(private http: HttpClient) {}

  getCount() : Observable<number> {
    return this.http.get<number>(this.url + 'user/count');
  }

  getUsers(page: number, PAGE_SIZE: number) : Observable<User[]> {
    return this.http.get<User[]>(this.url + 'user/list?page=' + page + '&size=' + PAGE_SIZE);
  }

  updateUser(user: any) : Observable<any> {
    return this.http.post(this.url + 'user/update', user);
  }

  deleteUser(userId: string) : Observable<any> {
    return this.http.post(this.url + 'user/delete', userId);
  }
}
