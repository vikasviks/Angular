import { Component, OnInit } from '@angular/core';
import {IProduct} from './Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);
  }

  getProducts(): IProduct[]{
    return[
      {
        Id: 1,
        Title : "Bat",
        Price : 500,
        ExpiryDate: "10-08-1999",
        isInStock: true,
        Quantity: 100
      },
      {
        Id: 2,
        Title : "Ball",
        Price : 20,
        ExpiryDate: "19-06-1999",
        isInStock: true,
        Quantity: 90
      },
      {
        Id: 3,
        Title : "Stumps",
        Price : 1500,
        ExpiryDate: "20-01-2012",
        isInStock: false,
        Quantity: 105
      },
      {
        Id: 4,
        Title : "Pen",
        Price : 1500,
        ExpiryDate: "10-02-1999",
        isInStock: true,
        Quantity: 85
      },
      {
        Id: 5,
        Title : "Pencil",
        Price : 2500,
        ExpiryDate: "22-09-2001",
        isInStock: false,
        Quantity: 110
      }
    ]
  }

}
