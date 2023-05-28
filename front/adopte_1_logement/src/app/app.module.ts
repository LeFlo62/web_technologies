import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HousingComponent } from './components/housing/housing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './components/review/review.component';
import { HousingListItemComponent } from './components/housing-list-item/housing-list-item.component';
import { ProfileComponent } from './components/profile/profile.component';

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
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import {MessagesModule} from "primeng/messages";

import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {KeyFilterModule} from "primeng/keyfilter";
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { LoginComponent } from './components/login/login.component';
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { authInterceptorProviders } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingComponent,
    ReviewsComponent,
    ReviewComponent,
    HousingListItemComponent,
    ReviewComponent,
    HousingComponent,
    ProfileComponent,
    ProfileFormComponent,
    PhoneValidatorDirective,
    UsernameValidatorDirective,
    PasswordValidatorDirective,
    EmailValidatorDirective
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
    PasswordModule,
    DividerModule,
    InputTextModule,
    MessagesModule,
    KeyFilterModule
  ],

  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
