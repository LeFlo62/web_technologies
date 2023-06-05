import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from 'app/data/housing';
import { apiUrl } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
    private url : string = apiUrl + 'review/';
  
  constructor(private http : HttpClient) { }

  getReviewsByHousing(id : number) : Observable<Review[]> {
    return this.http.get<Review[]>(this.url + 'list/' + id);
  }

  getReviewsByUser(userId : string) : Observable<Review[]> {
    return this.http.get<Review[]>(this.url + 'list/' + userId);
  }

  addReview(houseId : string, content : string, rating : number) : Observable<any> {
    return this.http.post<any>(this.url + 'create', {houseId: houseId, content : content, rating : rating});
  }

  getAverageRating(housingId : string) : Observable<number> {
    return this.http.get<number>(this.url + 'average/' + housingId);
  }

  getAverageRatingMultiple(housingIds : string[]) : Observable<any> {
    return this.http.post<any>(this.url + 'averageMultiple', housingIds);
  }
}
