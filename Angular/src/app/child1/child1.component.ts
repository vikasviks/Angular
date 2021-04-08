import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LogService } from '../log.service';
import { IProduct } from '../product/IProduct';
function pricerangeerror(min:number,max:number):ValidatorFn
{
  return (control:AbstractControl):{[key:string]:boolean }| null =>
    {
    if(control.value!==undefined && (isNaN(control.value) || control.value<min || control.value>max))
    {
      return{'priceRangeError':true};
    }
    return null;
  };
}
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
  price:number;
  color:string;
  prod:IProduct;
  min=0;
  max=2000;
  ProductEditForm:FormGroup;
  constructor(private logservice:LogService) { }
    
  ngOnInit(): void {
    this.logservice.pinr$.subscribe((item)=>this.prod=item)
     this.ProductEditForm= new FormGroup({
      Id:new FormControl(this.prod.Id,[Validators.required]),
      Title:new FormControl(this.prod.Title,[Validators.required]),
      Price:new FormControl(this.prod.Price,[Validators.required,pricerangeerror(this.min,this.max)]),
      ExpiryDate:new FormControl(this.prod.ExpiryDate,[Validators.required]),
      inStock:new FormControl(this.prod.inStock),
      Quantity:new FormControl(this.prod.Quantity,[Validators.required])
    })
  }
  updateProduct(){
    this.logservice.updateProduct(this.ProductEditForm.value);
  }
  reset(){
this.ProductEditForm.reset();
  }
}
