import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../data/user";
import {UsernameValidatorDirective} from "../../directives/username-validator.directive";
import {EmailValidatorDirective} from "../../directives/email-validator.directive";
import {PasswordValidatorDirective} from "../../directives/password-validator.directive";
import {PhoneValidatorDirective} from "../../directives/phone-validator.directive";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {
  form!: FormGroup;
  usernameValidator = new UsernameValidatorDirective();
  emailValidator = new EmailValidatorDirective();
  passwordValidator = new PasswordValidatorDirective();
  phoneValidator = new PhoneValidatorDirective();

  isEditingUsername = false;
  isEditingEmail = false;
  isEditingPassword = false;
  isEditingPhone = false;

  profile: User = {
    id: "",
    password: "",
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@est.fr',
    phone: '0606060606',
    username: 'usernameeee'
  };

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.profile.id = this.route.snapshot.params['id'];

    this.isEditingUsername = false;
    this.isEditingEmail = false;
    this.isEditingPassword = false;
    this.isEditingPhone = false;

    // form with validation rules
    this.form = this.formBuilder.group({
      phone: new FormControl(this.profile.phone, [Validators.required, this.phoneValidator.validate]),
      username: new FormControl(this.profile.username, [Validators.required, this.usernameValidator.validate]),
      email: new FormControl(this.profile.email, [Validators.required, this.emailValidator.validate]),
      password: new FormControl(this.profile.email, [Validators.required, this.passwordValidator.validate]),
    });
  }

  get f() {
    return this.form.controls;
  }


  onSubmit(value: string) {
    // stop here if form is invalid
    if (this.f[value].invalid) {
      return;
    }

    this.saveModification(value)

    switch (value) {
      case 'username':
        this.isEditingUsername = false;
        break;
      case 'email':
        this.isEditingEmail = false;
        break;
      case 'password':
        this.isEditingPassword = false;
        break;
      case 'phone':
        this.isEditingPhone = false;
        break;
    }
  }

  private saveModification(value: string) {
    this.profile[value] = this.f[value].value;
  }

  isValidPhone(): boolean {
    const control = this.f['phone'];
    return !!(control?.valid) ?? false;
  }

  isValidUsername(): boolean {
    const control = this.f['username'];
    return !!(control?.valid) ?? false;
  }

  isValidEmail(): boolean {
    const control = this.f['email'];
    return !!(control?.valid) ?? false;
  }

  isValidPassword() {
    const control = this.f['password'];
    return !!(control?.valid) ?? false;
  }

  onPasswordInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.replace(/[^\w]/g, '');
    this.f['password'].setValue(sanitizedValue);
  }

  onPasswordPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData('text');
    const sanitizedValue = pastedText.replace(/[^\w]/g, '');
    this.f['password'].setValue(sanitizedValue);
  }

}
