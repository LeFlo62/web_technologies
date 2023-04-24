import { Component, Input } from '@angular/core';
import { Review } from 'app/data/housing';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review : Review | any;

  constructor(){}

  onIncrementCounter(counter: string){
    if(counter == 'useful') {
        // function to the back
    }
    if(counter == 'useless'){
        // function to the back
    }
  }

}
