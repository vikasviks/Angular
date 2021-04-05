import { Injectable } from '@angular/core';
import { IProduct } from './product/Iproduct';
import { IPurchaseitem } from './purchase/IPurchaseItem';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    }

  getPurchase():IPurchaseitem[]
  {

    return[
     {
        PurchaseId:101,
      PurchaseName:"Car",
      Purchasedate:"15-3-2021",
      VendorName:"Tesla",
      Items:[
        {
        Id:1,
        Title:"Tesla Q",
        Price:50000,
        ExpiryDate:"13-12-2025",
        isInstock:true,
        Quantity:70},
        
      ],
     }, 
     

  {
    PurchaseId:102,
    PurchaseName:"Bike",
    Purchasedate:"13-1-2020",
    VendorName:"Honda",
    
    Items:[
      {
        Id:2,
        Title:"Shine",
        Price:10000,
        ExpiryDate:"01-02-2022",
        isInstock:false,
        Quantity:120
    
       },
    ]

  },

  {
    PurchaseId:103,
  PurchaseName:"Scooty",
  Purchasedate:"10-11-2023",
  VendorName:"Honda",
  Items:[
    {
    Id:1,
    Title:"Activa",
    Price:45000,
    ExpiryDate:"13-12-2023",
    isInstock:true,
    Quantity:80}],
 },

 {
  PurchaseId:104,
PurchaseName:"Bus",
Purchasedate:"15-6-2030",
VendorName:"Tata",
Items:[
  {
  Id:1,
  Title:"Tata",
  Price:70,
  ExpiryDate:"15-12-2028",
  isInstock:true,
  Quantity:50}],
},
 
    ]
  }

  

  getProducts(): IProduct[]
  {
    return[

     {
      Id:1,
      Title:"Pen",
      Price:50,
      ExpiryDate:"2-12-2022",
      isInstock:true,
      Quantity:70
  
     },

     {
      Id:2,
      Title:"Pencil",
      Price:10,
      ExpiryDate:"1-7-2035",
      isInstock:false,
      Quantity:120
  
     },

     {
      Id:3,
      Title:"Bag",
      Price:100,
      ExpiryDate:"1-10-2028",
      isInstock:true,
      Quantity:85
  
     },

     {
      Id:4,
      Title:"Eraser",
      Price:5,
      ExpiryDate:"9-11-2027",
      isInstock:true,
      Quantity:90
  
     },

     {
      Id:5,
      Title:"NoteBook",
      Price:40,
      ExpiryDate:"6-8-2025",
      isInstock:false,
      Quantity:90
  
     },
    ]
  }
}
