import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'studentdata',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  name:string='';
  id:string='';
  class:string='';
  subject:string='';
  studentData=[
    {
      'name':'',
      'id':'',
      'class':'',
      'subject':''
}];
  constructor() { }

  ngOnInit(): void {
  }
add(){
  if(this.name && this.id && this.class && this.subject){
    console.log('ddd', this.studentData);
    // this.clearData();
    // for(let i=0;i<10; i++){
    //   this.studentData[i].name=this.name;
    //   this.studentData[i].id=this.id;
    //   this.studentData[i].class=this.class;
    //   this.studentData[i].subject=this.subject;
    // }

    }


}
clearData(){
  this.name="";
  this.id="";
  this.class="";
  this.subject="";
}

}
