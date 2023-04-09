import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopte_1_logement';

  menuBar : MenuItem[] = [
    {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
    {label: 'Mes annonces', icon: 'pi pi-fw pi-tag', routerLink: ['/housing']},
    {label: 'Mes locations', icon: 'pi pi-fw pi-calendar', routerLink: ['/user']},
    {label: 'Messagerie', icon: 'pi pi-fw pi-comment', routerLink: ['/admin']},
  ];
}
