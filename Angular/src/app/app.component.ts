import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular";
  showDataBindingDemo=true;
  showDirectiveDemo=false;
  showProductsTable=false;

  showdbdemo():void{
    this.showDataBindingDemo=true;
    this.showDirectiveDemo=false;
    this.showProductsTable=false;
  }

  showdirectivedemo():void{
    this.showDirectiveDemo=true;
    this.showDataBindingDemo=false;
    this.showProductsTable=false;
  }
   
  showProducts():void{
    this.showProductsTable=true;
    this.showDataBindingDemo=false;
    this.showDirectiveDemo=false;
  }


// a = 300;
// b = 300;
// imgSource = '../assets/front.jpg';
 
// changeTshirtMouseEnter()
// {
//   this.imgSource = '../assets/back.jpg';
// }
// changeTshirtMouseExit():void
 
// {
//   this.imgSource = '../assets/front.jpg';
// }



  // setchange():void{
  //   this.ht=100;
  //   this.wt=100;
  // }

  // Onmouse():void{
  //   this.ht=100;
  //   this.wt=100;
  // }
}
