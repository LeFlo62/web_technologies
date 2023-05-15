import { Component, Input } from '@angular/core';
import { User } from 'app/data/user';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() public contacts : User[] =[];


}
