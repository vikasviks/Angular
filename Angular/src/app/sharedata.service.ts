import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  product:IProduct={
       Id:1,
      Title:"Pen",
      Price:20,
      ExpiryDate:"13-2-2021",
      isInstock:true,
      Quantity:70
    }

  product$ : BehaviorSubject<IProduct>
  constructor() { 

    this.product$=new BehaviorSubject(this.product);
  }
  setPrice(price : number){
    this.product.Price = price; 
    this.product$.next(this.product); 
  }
}
