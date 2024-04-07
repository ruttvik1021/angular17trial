import { Component } from '@angular/core';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [SendComponent, ReceiveComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {}
