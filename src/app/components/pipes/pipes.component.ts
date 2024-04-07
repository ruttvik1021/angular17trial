import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from '../../sqrtpipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [FormsModule, SqrtPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipeComponent implements OnInit {
  num = 0;
  constructor() {}

  ngOnInit(): void {}
}
