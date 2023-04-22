import { Component, OnInit } from '@angular/core';
import { HousingListItem } from '../../data/housing';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private static readonly PAGE_SIZE : number = 20;

  housingList : HousingListItem[] = [];

  page : number = 0;

  constructor(private housingService : HousingService) {}

  ngOnInit(): void {
    this.loadMoreHousing();
  }

  loadMoreHousing() {
    this.housingService.getPagedHousing(this.page, HomeComponent.PAGE_SIZE).subscribe(
      (data) => {
        this.housingList.push(...data);
        ++this.page;
      }
    );
  }

}
