import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:'Angular-Demo';
  ShowDataBindingDemo=true;
  ShowDirectiveDemo=false;
  showProductsTable=false;
  showMasterDetails=false;
  showchild1compo=false;
  showchild2compo=false;
  showdbDemo():void{
    this.ShowDataBindingDemo=true;
    this.ShowDirectiveDemo=false;
    this.showProductsTable=false;
    this.showMasterDetails=false;
    this.showchild1compo=false;
    this.showchild2compo=false;
  }
  showDirectiveDemo():void{
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=true;
    this.showProductsTable=false;
    this.showMasterDetails=false;
    this.showchild1compo=false;
    this.showchild2compo=false;
  }
  showProducts():void{
    this.showProductsTable=true;
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=false;
    this.showMasterDetails=false;
    this.showchild1compo=false;
    this.showchild2compo=false;
  }
  ShowMasterDetails():void{
    this.showProductsTable=false;
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=false;
    this.showMasterDetails=true;
    this.showchild1compo=false;
    this.showchild2compo=false;
  }
  ShowdataService():void{
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=false;
    this.showMasterDetails=false;
    this.showProductsTable=false;
    this.showchild1compo=true;
    this.showchild2compo=true;
  }
  
}
