import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  model = {
    address: '312 Sundown Lane',
    state: null
  };
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut'
  ];
  constructor(private fb: FormBuilder) { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
   }
   onClickSubmit(formData) {
    alert('Your Email is : ' + formData.email);
 }
}
