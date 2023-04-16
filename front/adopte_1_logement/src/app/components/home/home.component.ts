import { Component } from '@angular/core';
import { HousingListItem } from '../../data/housing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  housingList : HousingListItem[] = [];

  constructor() {
    for(let i : number = 0; i < 10; i++) {
      this.housingList.push(
        {
          id: 'zdaz45d4s321dz81',
          title: 'House ' + i,
          authorId: 'Author ' + i,
          rating: Math.random() * 5,
          image: 'https://picsum.photos/300/300'
        }
      );
    }
  }

}
