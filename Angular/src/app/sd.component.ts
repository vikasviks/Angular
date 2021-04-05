import { Component } from "@angular/core";

const template = `
 <div class="row">
  <div class="col-md-6">
  <app-input1></app-input1>
   </div>
   <div class="col-md-6">
   <app-input2></app-input2>
   </div>
 </div>
`

@Component({
    selector:'app-shareddata',
    template:template
})
export class ShareDataComponent{

}