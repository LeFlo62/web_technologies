import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../environments/environment';
import { HousingListItem, HousingItem } from '../data/housing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private url : string = apiUrl + 'housing';
  
  constructor(private http : HttpClient) { }
  
  public getPagedHousing(page : number, pageSize : number, sorting : string = "") : Observable<HousingListItem[]> {
    let sortString = "";
    if (sorting != "") {
      sortString = "&sort=" + sorting;
    }
    return this.http.get<HousingListItem[]>(this.url + "/list?page=" + page + "&size=" + pageSize + sortString);
  }

  public getHousingById(id: String) : Observable<HousingItem>{
    return this.http.get<HousingItem>(this.url + "/" + id);
  }

  createHousing(formData: FormData) {
    return this.http.post(this.url + '/create', formData);
  }
}
