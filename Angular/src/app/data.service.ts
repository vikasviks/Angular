import { Injectable } from '@angular/core';
import { IProduct } from './product/IProduct';
import { IPurchaseItem } from './purchase/IPurchaseItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() {

  }
  getProducts(): IProduct[] {
    return [
      {
        Id: 1,
        Title: "Pencil",
        Price: 100,
        ExpiryDate: "10-12-2025",
        inStock: true,
        Quantity: 120
      },
      {
        Id: 2,
        Title: "Pen",
        Price: 200,
        ExpiryDate: "11-03-2022",
        inStock: false,
        Quantity: 200
      },
      {
        Id: 3,
        Title: "Scale",
        Price: 200,
        ExpiryDate: "10-04-2025",
        inStock: true,
        Quantity: 300
      },
      {
        Id: 4,
        Title: "Eraser",
        Price: 150,
        ExpiryDate: "12-05-2022",
        inStock: false,
        Quantity: 110
      }
    ]
  }
  getPurchase(): IPurchaseItem[] {
    return [{
      Pid: 101,
      Ptitle: "Pencil",
      Pvendorname: "vikas",
      Pdate: "1-02-2020",
      Items: [
        {
          Id: 1,
          Title: "HB Pencil",
          Price: 120,
          ExpiryDate: "11-02-2025",
          inStock: true,
          Quantity: 120
        },
      ]
    },
    {
      Pid: 102,
      Ptitle: "Bag",
      Pvendorname: "vik",
      Pdate: "10-02-2020",
      Items: [
        {
          Id: 1,
          Title: "Office Bag",
          Price: 500,
          ExpiryDate: "1-02-2026",
          inStock: true,
          Quantity: 110
        },
      ]
    },
    {
      Pid: 103,
      Ptitle: "Pen",
      Pvendorname: "Nishu",
      Pdate: "12-02-2020",
      Items: [
        {
          Id: 1,
          Title: "Gel Pen",
          Price: 300,
          ExpiryDate: "1-02-2022",
          inStock: true,
          Quantity: 180
        },
      ]
    },
    {
      Pid: 104,
      Ptitle: "Notebooks",
      Pvendorname: "Nis",
      Pdate: "11-12-2020",
      Items: [
        {
          Id: 1,
          Title: "Notebook",
          Price: 300,
          ExpiryDate: "8-06-2023",
          inStock: true,
          Quantity: 220
        },
      ]
    }

    ];
  }
}
