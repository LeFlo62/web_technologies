import { Component, Inject, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'app/data/user';
import { UserService } from 'app/services/User.service';
import { get } from 'http';
import { LazyLoadEvent } from 'primeng/api';
import { MessagerieComponent } from '../messagerie/messagerie.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() public contacts : User[] =[];
  @Output() changeContactEvent = new EventEmitter<User>();
  virtualContacts : User[] = [];
  ngOnInit(){ 
     console.log(this.contacts);
  } 

  sendContact(contact: User) {
      this.changeContactEvent.emit(contact);
      console.log(contact.firstname + " " + contact.lastname);
  }
  

}

