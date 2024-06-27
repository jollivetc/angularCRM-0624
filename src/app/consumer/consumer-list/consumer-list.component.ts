import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { Observable } from 'rxjs';
import { Consumer } from '../model/consumer';
import { AsyncPipe, NgFor } from '@angular/common';
import { PhonePipe } from '../../common/phone.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-consumer-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, PhonePipe, FormsModule],
  templateUrl: './consumer-list.component.html',
  styleUrl: './consumer-list.component.scss'
})
export class ConsumerListComponent implements OnInit{
  searched:string =''
  consumersObs?: Observable<Consumer[]>;
  constructor(private consumersService : ConsumerService){}
  ngOnInit(): void {
    this.consumersObs = this.consumersService.getList()
  }
  search():void{
    this.consumersObs =this.consumersService.filterConsumers(this.searched);
  }

}
