import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';

  firstname = 'Christophe';
  cssClass = 'myclass';
  counter = 1;
  cars=['Renault', 'Peugeot', 'Toyota', 'Ford', 'Testla'];

  clicked($event:MouseEvent):void{
    console.log($event);
    console.log("clicked");
    this.counter = this.counter+1
    if(this.cssClass==='myclass'){
      this.cssClass='myclass2';
    }else{
      this.cssClass='myclass';
    }
  }
}
