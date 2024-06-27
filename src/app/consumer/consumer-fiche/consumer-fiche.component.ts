import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { Consumer } from '../model/consumer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crm-consumer-fiche',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './consumer-fiche.component.html',
  styleUrl: './consumer-fiche.component.scss'
})
export class ConsumerFicheComponent implements OnInit, OnDestroy{
  consumerForm:FormGroup;
  private subs:Subscription[]= [];
  private consumer?:Consumer;

  constructor(private consumerService:ConsumerService,
            private router:Router, private route:ActivatedRoute
  ){
    this.consumerForm = new FormGroup({
      civility:new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.consumerService.getById(id).subscribe({
        next: (consumer:Consumer)=>{
          this.consumer = consumer;
          this.consumerForm.patchValue(this.consumer)
        },
        error:(error:Error)=>alert(error),
        complete:()=>{}
      })
    }
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub=> sub.unsubscribe())
  }
  onSubmit():void {
    this.subs.push(this.consumerService.sendConsumer({...this.consumer,...this.consumerForm.value})
            .subscribe({
              next: (data: Consumer)=>{this.router.navigateByUrl('list')},
              error: (error:Error)=>{alert(error)},
              complete: ()=>{}
            }))
  }
}
