import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';


}
