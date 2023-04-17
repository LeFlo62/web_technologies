import { Component, OnInit } from '@angular/core';
import { HousingListItem } from '../../data/housing';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  housingList : HousingListItem[] = [];

  constructor(private housingService : HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllHousing().subscribe(
      (data) => {
        this.housingList = data;
      }
    );
  }

}
