import { Component, OnDestroy } from '@angular/core';
import { DemoObservableService } from '../common/demo-observable.service';
import { Observable, Subscription, map, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'crm-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy{

  private subs:Subscription[]= []
  myObservable?: Observable<number>;
  constructor(private demoObs:DemoObservableService){}

  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  subscribeAsync():void{
    this.myObservable=this.demoObs.getObservable()
  }



  subscribeObs():void{
    this.subs.push(this.demoObs.getObservable().pipe(
      map(x=>x*10),
      take(2)
    ).subscribe({
      next:(data:number)=>{console.log(data)},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{console.log('Complete')}
    }))
  }
}
