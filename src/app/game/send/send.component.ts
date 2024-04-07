import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css',
})
export class SendComponent implements OnInit {
  Name: string = '';
  Place: string = '';
  Animal: string = '';
  Thing: string = '';

  constructor(private chatService: GameService) {}

  ngOnInit(): void {
    let self = this;
  }

  enter() {
    this.chatService.sendMessageName(this.Name);
    this.chatService.sendMessagePlace(this.Place);
    this.chatService.sendMessageAnimal(this.Animal);
    this.chatService.sendMessageThing(this.Thing);
    this.chatService.updateHidden();
  }
}
