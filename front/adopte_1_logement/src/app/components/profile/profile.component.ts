import { Component } from '@angular/core';
import { User } from "../../data/user";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile: User = {
    password: "",
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    email: 'test@est.fr',
    phone: '0606060606',
    username: 'usernameeee'
  };
}
