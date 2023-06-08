import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'app/data/housing';
import { ReviewService } from 'app/services/review.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
    
  housingId: string = '';
  reviews: Review[] | undefined;
  newReviewContent: string = '';
  newReviewRating: number | any;
  authUser: any;
  authorId: string | any;
     
  constructor( 
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit(){
    this.reviews = this.config.data.reviews;
    this.housingId = this.config.data.housingId;
    this.authUser = sessionStorage.getItem("auth-user");
    this.authorId = JSON.parse(this.authUser).id;
  }

  onLoginVerification() {
    const userToken = sessionStorage.getItem('auth-token');
    if(userToken===null){
      this.router.navigate(['/user']);
    }
  }

  onPostReview() {
    const time: Date = new Date();
    console.log(time);
    console.log(this.housingId)
    this.reviewService.addReview(this.housingId, this.newReviewContent, this.newReviewRating).subscribe({
      next: () => {
        //this.reviews?.push(this.newReviewContent);
        //this.newReviewContent = '';
        //this.newReviewRating = null;
      },
      error: () => console.warn("Error occured in onPostReview function, couldn't post review")
    })
  }
}
