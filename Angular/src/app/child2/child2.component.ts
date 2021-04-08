import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { IProduct } from '../product/IProduct';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  product :IProduct;
  constructor(private logservice :LogService) { }

  ngOnInit(): void {
    this.logservice.pinr$.subscribe(P=>{
      this.product=P;
    })
  }

}
