import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HousingComponent } from './components/housing/housing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { HousingListItemComponent } from './components/housing-list-item/housing-list-item.component';
import { AdsComponent } from './components/ads/ads.component';
import { CreateHousingComponent } from './components/create-housing/create-housing.component';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingComponent,
    ReviewsComponent,
    ReviewComponent,
    HousingListItemComponent,
    AdsComponent,
    CreateHousingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RatingModule,
    AvatarModule,
    SkeletonModule,
    CarouselModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
