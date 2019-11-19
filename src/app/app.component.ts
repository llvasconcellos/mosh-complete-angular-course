import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(event: {objeto: string}) {
    console.log(event);
    console.log("Favorite changed");
  }
}
