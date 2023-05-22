import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousingComponent } from './components/housing/housing.component';
import { MessagerieComponent } from './components/messagerie/messagerie.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserService } from './services/User.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'housing/:id', component: HousingComponent },
  { path: 'messagerie', component: MessagerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService]
})
export class AppRoutingModule { }
