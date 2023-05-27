import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitting: boolean = false;
  loginForm: FormGroup = this.fb.group({
    username: ['jeanpierm', [Validators.required]],
    password: ['314159', [Validators.required]],
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService,    private fb: FormBuilder,) { }

  get registerPath() {
    return "/register";
  }


  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get email() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.submitting = true;
    const { username: email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.submitting = false;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
