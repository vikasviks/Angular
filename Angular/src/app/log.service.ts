import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  setData:IProduct={
    Id:1,
    Title:"Pencil",
    Price:200,
    ExpiryDate:"10-4-2022",
    inStock:true,
    Quantity:130
   
};
pinr$:BehaviorSubject<IProduct>
  constructor() {
    this.pinr$=new BehaviorSubject(this.setData)

   }
    setPrice(price:number)
    {
      this.setData.Price=price
    }
    updateProduct (p: IProduct){
      this.setData={
        ...p
      }
      this.pinr$.next(this.setData);
    }
   
}
