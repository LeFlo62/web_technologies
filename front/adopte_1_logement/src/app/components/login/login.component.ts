import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitting: boolean = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage : TokenStorageService,   private fb: FormBuilder,) { }

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
    if (this.tokenStorage.isLoggedIn()) {
      console.log("User is logged in");
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.submitting = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (data : {jwt: string, firstName : string, lastName : string, email : string, roles : string[]}) => {
        console.log(data);
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser({firstName : data.firstName, lastName : data.lastName, email : data.email, roles : data.roles});

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      },
      error: err => {
        this.errorMessage = err;
        this.isLoginFailed = true;
        this.submitting = false;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
