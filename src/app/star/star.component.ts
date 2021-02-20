import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
// import * as EventEmitter from 'events';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('is-favourite') isFavourite = true;   // Alias for input propertie (nickname)
  @Output() change = new EventEmitter();

  changeStatus() {
    this.isFavourite = !this.isFavourite;
    // this.change.emit(this.isFavourite);
    // this.change.emit({newValue: this.isFavourite, name: 'test name'});
    this.change.emit({ newValue: this.isFavourite });

  }

  faStar = faStar;

  inputText: string;
  write() {
    this.inputText;
  }

}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}

