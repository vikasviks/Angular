import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MyErrorhandlerService } from '../my-errorhandler.service';
import { IProduct } from './Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  value:string;
  pricevalue:number;
  // color='red';
  
   products: IProduct[] = [];
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
      this.products=this.dataservice.getProducts();
  }

  

  // getProducts(): IProduct[]
  // {
  //   return[

  //    {
  //     Id:1,
  //     Title:"Pen",
  //     Price:20,
  //     ExpiryDate:"19-2-2020",
  //     isInstock:true,
  //     Quantity:70
  
  //    },

  //    {
  //     Id:2,
  //     Title:"Pencil",
  //     Price:10,
  //     ExpiryDate:"01-5-2035",
  //     isInstock:false,
  //     Quantity:120
  
  //    },

  //    {
  //     Id:3,
  //     Title:"Notebook",
  //     Price:50,
  //     ExpiryDate:"12-12-2025",
  //     isInstock:true,
  //     Quantity:90
  
  //    },

  //    {
  //     Id:4,
  //     Title:"Eraser",
  //     Price:10,
  //     ExpiryDate:"02-11-2022",
  //     isInstock:true,
  //     Quantity:80
  
  //    },

  //    {
  //     Id:5,
  //     Title:"Bag",
  //     Price:70,
  //     ExpiryDate:"7-2-2025",
  //     isInstock:false,
  //     Quantity:125;
  
  //    },
  //   ]
  // }
}
