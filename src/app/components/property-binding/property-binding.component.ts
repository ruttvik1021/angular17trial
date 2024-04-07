import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent implements OnInit {
  fname = '';
  lname = '';
  firstName = '';
  lastName = '';
  isHidden = true;

  constructor() {}

  ngOnInit(): void {}

  enter() {
    if (this.firstName == '' && this.lastName == '') {
      return alert('Try entering your name');
    }
    this.isHidden = false;
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.isHidden = true;
  }
}
