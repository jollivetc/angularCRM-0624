import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'crm-help',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

  @Input()
  field?:AbstractControl;

  @Input()
  errorMessages?: {[key:string]:string};

isError():boolean{
  return !!this.field && this.field.touched && this.field.invalid;
}

get errors():string[]{
  return Object.keys(this.field?.errors as Object).map((key)=>{
    return this.errorMessages?.[key] ? this.errorMessages?.[key] : `missing for key ${key}`
  })
}

}
