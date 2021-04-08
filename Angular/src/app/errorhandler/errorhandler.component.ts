import { Component, OnInit } from '@angular/core';
import{MyerrorhandlerService} from '../myerrorhandler.service';

@Component({
  selector: 'app-errorhandler',
  templateUrl: './errorhandler.component.html',
  styleUrls: ['./errorhandler.component.css']
})
export class ErrorhandlerComponent implements OnInit {

  constructor() { }
  products=undefined;

  ngOnInit(): void {
  }

  getError(){
    this.products.sort();
  }
}
