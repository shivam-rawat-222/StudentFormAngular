import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-StudentForm',
  templateUrl: './StudentForm.component.html',
  styleUrls: ['./StudentForm.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class StudentFormComponent implements OnInit {

  data = {
    name:"",
    email:"",
    phoneNumber:undefined
  }

  submitData(data:NgForm){
    data.control.markAllAsTouched();
    if(data.valid)
    {
      console.log(data.value)
    }
  }
  nameValidate(event: any) {
    const input = event.target;
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^A-Za-z\s]/g, '');
    }
  }

  noValidate(event :any){
    const input = event.target;
    const regex = /^[0-9]*$/; 
    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^0-9]/g, '');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
