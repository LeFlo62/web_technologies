import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HousingListItem } from '../data/housing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private url : string = apiUrl + 'housing';

  constructor(private http : HttpClient) { }

  public getAllHousing() : Observable<HousingListItem[]> {
    return this.http.get<HousingListItem[]>(this.url + "/list");
  }

  public getPagedHousing(page : number, pageSize : number, sorting : string = "") : Observable<HousingListItem[]> {
    let sortString = "";
    if (sorting != "") {
      sortString = "&sort=" + sorting;
    }
    return this.http.get<HousingListItem[]>(this.url + "/list/paginated?page=" + page + "&size=" + pageSize + sortString);
  }
}
