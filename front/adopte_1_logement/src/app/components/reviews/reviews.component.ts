import { Component, OnInit } from '@angular/core';
import { Review } from 'app/data/housing';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-reviews-dialog',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] | undefined;
     
  constructor( 
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(){
    this.reviews = this.config.data;
  }
}
