import { Component, HostListener, OnInit } from '@angular/core';
import { HousingListItem } from '../../data/housing';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private static readonly PAGE_SIZE : number = 10;

  housingList : HousingListItem[] = [];

  page : number = 0;
  hasElementsLeft : boolean = true;

  constructor(private housingService : HousingService) {}

  ngOnInit(): void {
    this.loadMoreHousing();
  }

  loadMoreHousing() {
    if(this.hasElementsLeft){
      this.housingList.push(...Array(HomeComponent.PAGE_SIZE));
      

      this.housingService.getPagedHousing(this.page, HomeComponent.PAGE_SIZE).subscribe(
        (data) => {
          for(let i = 0; i < data.length; i++) {
            this.housingList[this.page * HomeComponent.PAGE_SIZE + i] = data[i];
          }

          if(data.length < HomeComponent.PAGE_SIZE) {
            let diff = HomeComponent.PAGE_SIZE - data.length;
            
            //Remvove the skeletons
            this.housingList.splice(this.page * HomeComponent.PAGE_SIZE + data.length, diff);
            
            this.hasElementsLeft = false;
          }
          ++this.page;
        }
      );
    }
  }

  //Event for end of page
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMoreHousing();
    }
  }

}
