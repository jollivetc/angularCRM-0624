import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'crm-dummy',
  standalone: true,
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {

  @Input()
  aValue?:string

  @Input()
  anotherValue?:string

  @Output()
  sended:EventEmitter<string> = new EventEmitter<string>();

  clicked():void{
    this.sended.emit(`you gave me ${this.aValue}`);
  }

}
