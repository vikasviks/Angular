import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit ,OnChanges{

  @Input() PurchaseItem:IPurchaseItem;
  Price=0;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges() : void{
    console.log(this.PurchaseItem);
    this.PurchaseItem.Items.forEach(i=>{
      this.Price=this.Price+i.Price;
    })
    
  }

}
