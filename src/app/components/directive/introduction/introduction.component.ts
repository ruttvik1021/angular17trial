import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent implements OnInit {
  isDisabled = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggle() {
    if (!this.isDisabled) {
      this.isDisabled = true;
      this.router.navigateByUrl('/');
    } else {
      this.isDisabled = false;
    }
  }

  getDisabledStatus() {
    return this.isDisabled;
  }
}
