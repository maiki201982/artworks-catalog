import { Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArtWork } from 'src/app/interfaces/artwork.interfaces';
import { AppState } from 'src/app/state/app.state';
import { selectSearch } from 'src/app/state/selectors/artworks.selectors';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArtworkCardComponent implements OnInit{
  @Input()
  artwork?: ArtWork;

  search$!: Observable<string>;

  private store: Store<AppState> = inject(Store);

  ngOnInit() {
    this.search$ =  this.store.select(selectSearch);
  }
}
