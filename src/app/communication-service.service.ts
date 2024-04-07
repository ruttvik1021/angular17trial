import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  arr = ['Ruttvik', 'Saurabh', 'Ganesh'];

  constructor() {
    console.log('Services loaded in memory');
  }
}
