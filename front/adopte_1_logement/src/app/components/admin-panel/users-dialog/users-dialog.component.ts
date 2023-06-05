import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../data/user';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
})
export class UsersDialogComponent {
  submitting: boolean = false;
  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private message: MessageService,
    public usersService: UserService
  ) {}

  isInvalid(controlName: string) {
    const control = this.userForm.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  saveUser(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.submitting = true;
    const { firstName, lastName, email, username, password } = this.userForm.value;
    this.usersService.createUser(firstName, lastName, email, password, username).subscribe({
      next: (_) => {
        this.usersService.loadUsers();
        this.message.add({
          severity: 'success',
          summary: `User created successfully!`,
        });
      },
      error: (err) => {
        const { error } = err;
        if (!error) return;
        this.message.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message,
        });
        this.submitting = false;
      },
      complete: () => {
        this.usersService.displayDialog = false;
        this.submitting = false;
      },
    });
  }

  closeDialog() {
    this.usersService.displayDialog = false;
  }
}
