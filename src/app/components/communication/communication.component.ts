import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../communication-service.service';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css',
})
export class CommunicationComponent implements OnInit {
  myStudents: String[] = [];
  // constructor injection
  constructor(private service: CommunicationService) {
    console.log('Component Loaded in memory');
  }

  ngOnInit(): void {
    this.myStudents = this.service.arr;
  }
}
