import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  nameSubject = new Subject();
  placeSubject = new Subject();
  animalSubject = new Subject();
  thingSubject = new Subject();
  isHidden = new Subject();

  constructor() {}

  sendMessageName(msg: string) {
    this.nameSubject.next(msg);
  }
  sendMessagePlace(msg1: string) {
    this.placeSubject.next(msg1);
  }
  sendMessageAnimal(msg2: string) {
    this.animalSubject.next(msg2);
  }
  sendMessageThing(msg3: string) {
    this.thingSubject.next(msg3);
  }

  updateHidden() {
    if (
      !this.nameSubject ||
      !this.placeSubject ||
      !this.animalSubject ||
      !this.thingSubject
    ) {
      this.isHidden.next(true);
    } else {
      this.isHidden.next(false);
    }
  }

  subjectSendName() {
    return this.nameSubject.asObservable();
  }

  subjectSendPlace() {
    return this.placeSubject.asObservable();
  }

  subjectSendAnimal() {
    return this.animalSubject.asObservable();
  }

  subjectSendThing() {
    return this.thingSubject.asObservable();
  }

  subjectSendHidden() {
    return this.isHidden.asObservable();
  }
}
