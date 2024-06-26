import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DummyComponent } from './component/dummy/dummy.component';

@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,RouterLink,RouterLinkActive,
            MatToolbarModule, DummyComponent,
            MatIconModule, MatButtonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';

  data='Bonjour';

  received($event:string):void{
    console.log($event);
  }

  received2($event:string):void{
    console.warn($event);
  }

}
