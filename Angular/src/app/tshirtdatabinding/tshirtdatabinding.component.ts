import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'T-shirt';

  a=350;
  b=350;
  imgsource= "../assets/front.jpg"

  setWidth():void
  {
    this.a=300;
    this.b=300;
  }

  setDefault():void
  {
    this.a=300;
    this.b=300;
  }

  changefront():void
  {
    this.imgsource="../assets/back.jpg"
  }

  changeback():void
  {
    this.imgsource="../assets/front.jpg"
  }
  

}
