import { Component, OnInit } from "@angular/core";
import { User } from "app/data/user";


@Component({
    selector: 'app-messagerie',
    templateUrl: './messagerie.component.html',
    styleUrls: ['./messagerie.component.scss']
  })
export class MessagerieComponent {
  users : User[] = [{"id": "1", "firstname": "Jack", "lastname":"Maxer","image":""},
                            {"id": "2","firstname": "Julia", "lastname":"Tungsten", "image":""},
                            {"id": "3","firstname": "Julia", "lastname":"Tungsten", "image":""},
                            {"id": "4","firstname": "Bill", "lastname":"Tungsten","image":""},
                            {"id": "5","firstname": "Fred", "lastname":"Tungsten", "image":""},
                            ];

  public getUsersData(): void {
    /*recupère la liste des users 
     this.usersData = axios.get('http://localhost:8080/api/users');
     */ 
    return ;
  }
 

}