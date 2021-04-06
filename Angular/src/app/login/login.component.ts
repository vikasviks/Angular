import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from './IUser';

function ageRangevalidator(min:number,max:number):ValidatorFn
{
 return (control: AbstractControl):{[key:string]:boolean}|null =>
 {
   if(control.value !== undefined && (isNaN(control.value)|| control.value<min|| control.value>max))
   {
     return{"Age range Error":true};
   }
   return null;
 }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  min=20;
  max=60;
  loginform:FormGroup;
  user:IUser ={
    email:"vikasvik97@gmail.com",
    password:'asdfgh',
    age:18
  };

  ngOnInit(){
    this.loginform =new FormGroup({
      email: new FormControl(this.user.email,[Validators.required]),
      password: new FormControl(this.user.password,[Validators.required,Validators.minLength(5)]),
      age: new FormControl(null,[ageRangevalidator(this.min,this.max)]),
      phonenumber: new FormControl(null,[]),
      notification: new FormControl('email',[])
    });
 
    this.formControlValueChanged();
  }
 
  login(){
  console.log(this.loginform.value);
  console.log(this.user);
  }
 
  cancel(){
    this.loginform.reset();
  }
 
  formControlValueChanged(){
    const phoneControl =this.loginform?.get('phonenumber');
    this.loginform.get('notification')?.valueChanges.subscribe((data:string)=>{
      console.log(data);
      if(data ==='phone'){
        phoneControl?.setValidators([Validators.required])
      }
      else if(data==='email'){
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    });
  }
}