import { Component, OnInit } from '@angular/core';
import {IpurchaseItems} from './IpurchaseItems';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase: IpurchaseItems[] = [];
  constructor() { }

  ngOnInit(): void {
    this.purchase = this.getPurchase();
    // console.log(this.purchase);
  }
  getPurchase(): IpurchaseItems[]{
    return[
      {
        PurchaseId : 100,
        PurchaseTitle: "Car",
        PurchaseDate : "10-08-2019",
        VendorName : "Tesla",
        Items : [
          {
            Id: 1,
            Title : "Tesla cybertruck",
            Price : 50000,
            ExpiryDate: "10-08-2050",
            isInStock: true,
            Quantity: 78
          }
        ]
      },
      {
        PurchaseId : 101,
        PurchaseTitle: "Bike",
        PurchaseDate : "12-03-2020",
        VendorName : "KTM",
        Items : [
          {
            Id: 2,
            Title : "Ktm",
            Price : 20000,
            ExpiryDate: "19-06-2020",
            isInStock: true,
            Quantity: 106
          }
        ]
      },
      {
        PurchaseId : 102,
        PurchaseTitle: "Scooter",
        PurchaseDate : "21-08-1999",
        VendorName : "Vespa",
        Items : [
          {
            Id: 3,
            Title : "Vespa",
            Price : 15000,
            ExpiryDate: "20-01-2025",
            isInStock: false,
            Quantity: 99
          }
        ]
      },
      {
        PurchaseId : 103,
        PurchaseTitle: "Scooty",
        PurchaseDate : "22-05-2019",
        VendorName : "Honda",
        Items : [
          {
            Id: 4,
            Title : "Activa",
            Price : 15000,
            ExpiryDate: "10-02-2050",
            isInStock: true,
            Quantity: 108
          }
        ]
      },
      {
        PurchaseId : 104,
        PurchaseTitle: "Bus",
        PurchaseDate : "25-08-2017",
        VendorName : "Tata",
        Items : [
          {
            Id: 5,
            Title : "CNG-bus",
            Price : 25000,
            ExpiryDate: "22-09-2050",
            isInStock: false,
            Quantity: 65
          }
        ]
      }
    ]
  }

}
