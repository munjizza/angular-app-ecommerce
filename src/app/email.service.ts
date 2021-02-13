import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getMail() {
    return ["item-1","item-2","item-3"];
  }
}
