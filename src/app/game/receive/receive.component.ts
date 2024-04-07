import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-receive',
  standalone: true,
  imports: [],
  templateUrl: './receive.component.html',
  styleUrl: './receive.component.css',
})
export class ReceiveComponent implements OnInit, OnDestroy {
  receivedName = '';
  receivedPlace = '';
  receivedAnimal = '';
  receivedThing = '';
  isHidden = '';

  nameSubscription: Subscription;
  placeSubscription: Subscription;
  animalSubscription: Subscription;
  thingSubscription: Subscription;
  isHiddenSubscription: Subscription;

  constructor(private chatservice: GameService) {
    let self = this;

    (this.nameSubscription = this.chatservice
      .subjectSendName()
      .subscribe((data) => {
        self.receivedName = data as string;
      })),
      (this.placeSubscription = this.chatservice
        .subjectSendPlace()
        .subscribe((data) => {
          self.receivedPlace = data as string;
        })),
      (this.animalSubscription = this.chatservice
        .subjectSendAnimal()
        .subscribe((data) => {
          self.receivedAnimal = data as string;
        })),
      (this.thingSubscription = this.chatservice
        .subjectSendThing()
        .subscribe((data) => {
          self.receivedThing = data as string;
        }));
    this.isHiddenSubscription = this.chatservice
      .subjectSendHidden()
      .subscribe((data) => {
        self.isHidden = data as string;
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
    this.placeSubscription.unsubscribe();
    this.animalSubscription.unsubscribe();
    this.thingSubscription.unsubscribe();
    this.isHiddenSubscription.unsubscribe();
  }
}
