import { BackendServicesService } from './../services/backend-services.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:String='';
password:String='';
data:any;
countryList:any;
countryArray:any=[];
errorMsg:boolean=false;


  constructor(private backendService:BackendServicesService){}
  ngOnInit(): void {
  }

  signIn(form: NgForm){
console.log('form',form.value);

localStorage.setItem('formdata',JSON.stringify(form.value));
console.log('local',localStorage.getItem('formdata'));

  }
  getCountries(){
    this.backendService.get('https://api.first.org/data/v1/countries').subscribe((result)=>{
      this.data=result;
      this.countryList=this.data.data;
     this.countryArray=Object.values(this.countryList);
     })
  }
}

