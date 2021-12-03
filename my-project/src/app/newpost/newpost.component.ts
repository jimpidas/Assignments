import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  
  title:string="";
  description:string="";

  @Output() onSubmit=new EventEmitter<any>()

  constructor() { }


  ngOnInit(): void {
   
  }
  submitForm(){
    this.onSubmit.emit();
  }
  
}
