import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  submitted: boolean=false;
  newpostForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newpostForm = this.formBuilder.group({
      headline: '',
      content: ''
  });
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.newpostForm.valid) {
        console.log("New post added");
    }}
}
