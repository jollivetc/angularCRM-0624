import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';


}
