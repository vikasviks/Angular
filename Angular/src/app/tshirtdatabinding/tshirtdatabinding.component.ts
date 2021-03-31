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
  title = "Data Binding Demo";
  showDataBindingDemo=true;
  showDirectiveDemo=false;
  
  showdbdemo():void{
    this.showDataBindingDemo=true;
    this.showDirectiveDemo=false;
  }

  showdirectivedemo():void{
    this.showDirectiveDemo=true;
    this.showDataBindingDemo=false;
  }



a = 300;
b = 300;
imgSource = '../assets/front.jpg';
 
changeTshirtMouseEnter()
{
  this.imgSource = '../assets/back.jpg';
}
changeTshirtMouseExit():void
 
{
  this.imgSource = '../assets/front.jpg';
}



  // setchange():void{
  //   this.ht=100;
  //   this.wt=100;
  // }

  // Onmouse():void{
  //   this.ht=100;
  //   this.wt=100;
  // }

}
