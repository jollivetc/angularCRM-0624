import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HelpComponent } from '../component/help/help.component';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'crm-login',
  standalone: true,
  imports: [ReactiveFormsModule,
            NgIf,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            HelpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup;
  loginErrorMessages = {
    required: 'login required',
    minlength: 'should be 3 char at least'
  }
  constructor(private authentService: AuthenticationService,
              private router:Router
  ){
    this.authentService.disconnect();
    this.loginForm= new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, no$InPasswordValidator])
    });
  }

  login():void{
    const user = this.authentService.authentUser(
          this.loginForm.value.login,
          this.loginForm.value.password);
    if(user){
      this.router.navigateByUrl('/home');
    }
  }
}

function no$InPasswordValidator(c:AbstractControl):ValidationErrors|null{
  if((c.value as string).indexOf('$')<0){
    return null;
  }
  return {
    no$InPassword:false
  }
}
