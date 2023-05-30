import { Component } from '@angular/core';
import { User } from "../../data/user";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  reviews = [
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    },
    {
      author: 'Sarah VALERY',
      date: '24-04-2023',
      content: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
      usefulCounter: 10,
      uselessCounter: 10
    }
  ];
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
