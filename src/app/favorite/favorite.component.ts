import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('aqui')
    this.isFavorite = !this.isFavorite;
    this.change.emit({objeto: 'informacao do evento'});
  }

}
