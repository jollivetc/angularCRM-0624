import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers');
  }

  filterConsumers(searched:string):Observable<Consumer[]>{
    return this.http.get<Consumer[]>(`/api/consumers?q=${searched}`);
  }
}
