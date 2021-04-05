import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyErrorhandlerService implements ErrorHandler{

  constructor() { }
handleError(error:any){
  console.log("error can be seen now!");
}


}
