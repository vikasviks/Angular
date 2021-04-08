import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  @Input() color : 'string';
  @HostBinding('style.border') hostborder:string;
  constructor(private el : ElementRef,private render :Renderer2) { 

  }
  changeColor(color:string)
  {
    this.render.setStyle(this.el.nativeElement,'color',color);
  }
  @HostListener('click') foo()
  {
    alert("hello");
  }
  @HostListener('mouseenter') abc()
  {
    this.changeColor(this.color);
    this.hostborder='3px solid black';
  }
  @HostListener('mouseleave') xyz()
  {
    this.changeColor(this.color);
    this.changeColor("black");
    this.hostborder='';
  }

}
