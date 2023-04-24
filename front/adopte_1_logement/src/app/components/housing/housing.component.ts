import { Component, OnInit, ɵbypassSanitizationTrustHtml } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from 'app/data/housing';
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
  housingData: Housing | any;
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
    // this.housingDataSub = this.housingService.getHousingDataFromId(this.housingId).subscribe({
    //   next: (res: any) => this.housingData = res,
    //   err: () => console.log("Error in housing component: getHousingDataFromId()")
    // });

    // En attendant :
    this.housingData = {
      title: 'Titre à rallonnnnnnnnnnnnnnnnnnnge',
      images: [
        {
          src : 'https://picsum.photos/300/300',
          alt: 'image1'
        },
        {
          src : 'https://picsum.photos/300/300',
          alt: 'image2'
        },
        {
          src : 'https://picsum.photos/300/300',
          alt: 'image3'
        },
        {
          src : 'https://picsum.photos/300/300',
          alt: 'image3'
        }
      ],
      rating: Math.random() * 5,
      services: ['Service 1', 'Service 2', 'Etc.'],
      constraints: ['Contrainte 1', 'Contrainte 2', 'Etc.'],
      housingDescription: "Description d'une annonce super super cool !!",
      landlordDescription: "A voir qu'est-ce qu'on met dans cette description du bailleur",
      reviews : [
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        },
        {
          author: 'Sarah VALERY',
          date: '24-04-2023',
          content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
          usefulCounter: 10,
          uselessCounter: 10
        }
      ]
    }
  }

  onShowComments(){
    this.dialogService.open(ReviewsComponent, { 
      data: this.housingData.reviews, 
      header: 'Avis des locataires' 
    });
  }
}
