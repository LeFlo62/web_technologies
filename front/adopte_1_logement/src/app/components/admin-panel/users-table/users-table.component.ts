import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../../../data/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  submitting: boolean = false;

  get loading() {
    return this.usersService.loadingTable;
  }

  get users() {
    return this.usersService.users;
  }

  constructor(
    private usersService: UserService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  showDialog(): void {
    this.usersService.displayDialog = true;
  }

  loadUsers() {
    this.usersService.loadUsers();
  }

  removeUser(userId: number): void {
    this.submitting = true;
    this.usersService.removeUser(userId);
    this.submitting = false;
  }

  showRoles(User: User) {
    return this.usersService.showRoles(User.id);
  }
}
