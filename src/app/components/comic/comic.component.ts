import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {
  @Input() comic!: Comic;

  @Output() seleccionarComicFavoritoParent: EventEmitter<any> = new EventEmitter

  seleccionarComicFavorito(): void{
    this.seleccionarComicFavoritoParent.emit(this.comic)
  }

}
