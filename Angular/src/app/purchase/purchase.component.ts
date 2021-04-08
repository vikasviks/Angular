import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../product/IProduct';
import { IPurchaseItem } from './IPurchaseItem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  Items: IPurchaseItem[]=[];
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
   this.Items=this.dataservice.getPurchase();
  }
  
  
          
      }
    
