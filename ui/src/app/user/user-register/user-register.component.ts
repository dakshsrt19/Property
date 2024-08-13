import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder, private userService: UserService, private alertify:AlertifyService) {}

  ngOnInit() {
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        Name: [null, [Validators.required]],
        Email: [null, [Validators.required, Validators.email]],
        Password: [null, [Validators.required, Validators.minLength(8)]],
        Mobile: [null, [Validators.required, Validators.maxLength(10)]],
        confirmPassword: [null, [Validators.required]],
      },
      { Validators: this.passwordMatchingValidator }
    );
  }
  public passwordMatchingValidator(fg: FormGroup) {
    return fg.get('Password')?.value === fg.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  get name() {
    return this.registrationForm.get('Name') as FormControl;
  }
  get password() {
    return this.registrationForm.get('Password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('Mobile') as FormControl;
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.user);
      this.alertify.success("Congrats, user registered successfully");
      this.registrationForm.reset();
    }
    else{
      this.alertify.error("kindly, provide the required field");
    }
  }
}
