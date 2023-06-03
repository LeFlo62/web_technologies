import { Component } from '@angular/core';
import { User } from "../../data/user";
import { UserService } from 'app/services/user.service';
import { ActivatedRoute, Route } from '@angular/router';


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
  profile!: User;

  constructor(private route : ActivatedRoute, private userService : UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("dsqdqsd")
      this.userService.getUser(params['id']).subscribe(user => {
        this.profile = user;
      });
    });
  }
}
