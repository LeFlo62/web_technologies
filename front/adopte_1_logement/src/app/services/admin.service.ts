import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Housing } from 'app/data/housing';
import { User } from 'app/data/user';
import { apiUrl } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  private readonly url : string = apiUrl + 'admin/';

  constructor(private http: HttpClient) {}

  getUserCount() : Observable<number> {
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

  getHousingCount() : Observable<number> {
    return this.http.get<number>(this.url + 'housing/count');
  }

  getHousings(page: number, PAGE_SIZE: number) : Observable<Housing[]> {
    return this.http.get<Housing[]>(this.url + 'housing/list?page=' + page + '&size=' + PAGE_SIZE);
  }

  updateHousing(housing: any) : Observable<any> {
    return this.http.post(this.url + 'housing/update', housing);
  }

  deleteHousing(housingId: string) : Observable<any> {
    return this.http.post(this.url + 'housing/delete', housingId);
  }
}
