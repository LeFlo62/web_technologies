import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from 'app/data/housing';
import { HousingService } from 'app/services/housing.service';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss']
})
export class HousingComponent implements OnInit {
  housingData: Housing | any;
  housingId: String | any;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.housingId = params['id']
    })
    // this.housingDataSub = this.housingService.getHousingDataFromId(this.housingId).subscribe({
    //   next: (res: any) => this.housingData = res,
    //   err: () => console.log("Error in housing component: getHousingDataFromId()")
    // });

    // En attendant :
    this.housingData = {
      title: 'Titre à rallonnnnnnnnnnnnnnnnnnnge',
      img: 'https://picsum.photos/300/300',
      rating: Math.random() * 5,
      services: ['Service 1', 'Service 2', 'Etc.'],
      constraints: ['Contrainte 1', 'Contrainte 2', 'Etc.'],
      housingDescription: "Description d'une annonce super super cool !!",
      landlordDescription: "A voir qu'est-ce qu'on met dans cette description du bailleur"
    }
  }
}
