import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from 'app/data/housing';
import { HousingService } from 'app/services/housing.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ReviewService } from 'app/services/review.service';

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
    private dialogService: DialogService,
    private reviewService: ReviewService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.housingId = params['id']
    })
    this.housingService.getHousingById(this.housingId).subscribe({
      next: (res: any) => {
        this.housingData = res;
        this.reviewService.getAverageRating(this.housingId).subscribe(
          (rating : {housingId : string, rating : number}) => {
            this.housingData.rating = rating.rating;
          });
      },
      error: (err: any) => console.warn("Error occured: " + err)
    })
  }

  onShowComments(){
    this.dialogService.open(ReviewsComponent, { 
      data: {
        housingId: this.housingId,
        reviews: this.housingData.reviews
      },
      header: 'Avis des locataires' 
    });
  }
}
