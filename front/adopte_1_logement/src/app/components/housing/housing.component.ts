import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingItem } from 'app/data/housing';
import { HousingService } from 'app/services/housing.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.scss'],
  providers: [DialogService]
})
export class HousingComponent implements OnInit {
  housingData: HousingItem | any;
  housingId: String | any;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private dialogService: DialogService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.housingId = params['id']
    })
    this.housingService.getHousingById(this.housingId).subscribe({
      next: (res: any) => {
        console.warn(res),
        this.housingData = res
        
        // En attendant :
        // this.housingData = {
        //   title: res.title,
        //   images: [
        //     {
        //       src : 'https://picsum.photos/300/300',
        //       alt: 'image1'
        //     },
        //     {
        //       src : 'https://picsum.photos/300/300',
        //       alt: 'image2'
        //     },
        //     {
        //       src : 'https://picsum.photos/300/300',
        //       alt: 'image3'
        //     },
        //     {
        //       src : 'https://picsum.photos/300/300',
        //       alt: 'image3'
        //     }
        //   ],
        //   rating: res.rating,
        //   services: ['Service 1', 'Service 2', 'Etc.'],
        //   constraints: ['Contrainte 1', 'Contrainte 2', 'Etc.'],
        //   housingDescription: res.housingDescription,
        //   landlordDescription: res.landlordDescription,
        //   reviews : [
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     },
        //     {
        //       author: 'Sarah VALERY',
        //       date: '24-04-2023',
        //       content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        //       usefulCounter: 10,
        //       uselessCounter: 10
        //     }
        //   ]
        // }
      },
      error: (err: any) => console.warn("Error occured: " + err)
    })
  }

  onShowComments(){
    this.dialogService.open(ReviewsComponent, { 
      data: this.housingData.reviews, 
      header: 'Avis des locataires' 
    });
  }
}
