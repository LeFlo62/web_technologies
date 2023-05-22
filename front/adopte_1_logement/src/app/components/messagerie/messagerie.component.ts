import { Component, Inject, OnInit } from "@angular/core";
import { User } from "app/data/user";
import { UserService } from "app/services/User.service";
import { Hash } from "crypto";


@Component({
    selector: 'app-messagerie',
    templateUrl: './messagerie.component.html',
    styleUrls: ['./messagerie.component.scss']
  })
export class MessagerieComponent {

  public loadedUser : User = {id: "000", firstname: "Adopte", lastname:"UnLogement", image:""};

  private contacts : User[] = UserService.getUsersData();
  public getContacts() : User[] {
    return this.contacts;
  }
  public receiveContact($event: User) {
    this.loadedUser = $event;
  }  

}

function sha256(email: string): string {
  throw new Error("Function not implemented.");
}
