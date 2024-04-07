import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent implements OnInit {
  show = true;
  abc = '';
  array: string[] = [];
  myCity = '';
  // isHidden = true;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }

  add() {
    if (this.abc == '') {
      return alert('Try entering your good name 🙂 ');
    } else {
      this.array.push(this.abc);
      this.abc = '';
    }
  }
}
