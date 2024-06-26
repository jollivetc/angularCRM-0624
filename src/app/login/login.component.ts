import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HelpComponent } from '../component/help/help.component';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { User } from './model/user';
import { Subscription } from 'rxjs';


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
export class LoginComponent implements OnDestroy{

  loginForm:FormGroup;
  loginErrorMessages = {
    required: 'login required',
    minlength: 'should be 3 char at least'
  }
  private subs:Subscription[]=[]
  constructor(private authentService: AuthenticationService,
              private router:Router
  ){
    this.authentService.disconnect();
    this.loginForm= new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, no$InPasswordValidator])
    });
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  login():void{
    this.subs.push(this.authentService.authentUser(
          this.loginForm.value.login,
          this.loginForm.value.password)
        .subscribe({
          next : (data:User)=>{this.router.navigateByUrl('/home')},
          error: (error:Error)=>{alert(error)},
          complete: ()=>{}
        }));
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
