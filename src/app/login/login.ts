import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from './passwordMatch.vaildator';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [createPasswordStrengthValidator(), Validators.pattern(/[A-Z]+/)]],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
