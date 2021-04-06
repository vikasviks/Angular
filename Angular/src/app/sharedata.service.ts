import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  prod:IProduct={
       Id:1,
      Title:"Pen",
      Price:20,
      ExpiryDate:"13-2-2021",
      isInstock:true,
      Quantity:70
    }

  product$ : BehaviorSubject<IProduct>
  constructor() { 

    this.product$=new BehaviorSubject(this.prod);
  }
  setPrice(price : number){
    this.prod.Price = price; 
    this.product$.next(this.prod); 
  }

  updateProduct(p:IProduct){
    this.prod={
      ...p
    }
    this.product$.next(this.prod)
  }
}
