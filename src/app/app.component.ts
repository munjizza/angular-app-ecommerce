import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './star/star.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: "This is post title",
    isFavourite: true
  }

  // onFavouriteChanged(isFavourite) {
  //   console.log('Favourite changed: ', isFavourite);
  // }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log('Favourite changed: ', eventArgs);
  }
  
}
