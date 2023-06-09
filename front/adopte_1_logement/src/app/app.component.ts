import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from './services/token-storage.service';
import { User } from './data/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopte_1_logement';

  menuBar : MenuItem[] = [
    {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
  ];

  userMenu : MenuItem[] = [
    {label: 'Mon profil', icon: 'pi pi-fw pi-user', routerLink: ['/profile/' + this.user?.id]},
    {
      separator: true
    },
    {label: 'Déconnexion', icon: 'pi pi-fw pi-sign-out', routerLink: ['/logout']},
  ];

  user? : User;

  constructor(private tokenStorage : TokenStorageService) {
    if(this.tokenStorage.isLoggedIn()) {
      this.user = this.tokenStorage.getUser();
      if(this.user){

        this.menuBar.push(
          {label: 'Mes annonces', icon: 'pi pi-fw pi-tag', routerLink: ['/my-ads']},
          {label: 'Mes locations', icon: 'pi pi-fw pi-calendar', routerLink: ['/user']},
          {label: 'Messagerie', icon: 'pi pi-fw pi-comment', routerLink: ['/message']},
        );

        this.userMenu[0].routerLink = ['/profile/' + this.user.id];
        
        if(this.user.roles.includes('ADMIN')) {
          this.userMenu.unshift({label: 'Administration', icon: 'pi pi-fw pi-cog', routerLink: ['/admin']});
        }
      }
    }
  }
}
