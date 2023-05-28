import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url : string = apiUrl + 'image/';

  constructor(private http : HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(this.url + imageUrl, { responseType: 'blob' });
  }

  createImageFromBlob(image: Blob) : Observable<any> {
    return new Observable(observer => {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        observer.next(reader.result);
     }, false);
  
     if (image) {
        reader.readAsDataURL(image);
     }
    });

    
 }
}
