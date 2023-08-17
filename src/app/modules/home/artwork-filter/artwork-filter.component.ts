import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, fromEvent, map, startWith, withLatestFrom } from 'rxjs';
import { loadSearch } from 'src/app/state/actions/artworks.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-artwork-filter',
  templateUrl: './artwork-filter.component.html',
  styleUrls: ['./artwork-filter.component.scss']
})
export class ArtworkFilterComponent implements AfterViewInit {

  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  @ViewChild('searchButton', { static: true }) searchButton!: ElementRef;
  
  private store: Store<AppState> = inject(Store);

  ngAfterViewInit() {
    const searchValue$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      distinctUntilChanged(),
      debounceTime(500)
    );

    const searchClick$ = fromEvent(this.searchButton.nativeElement, 'click');
    searchClick$.pipe(
      withLatestFrom(searchValue$, (click, search: string) => search.toLowerCase()),
      startWith(''),
      distinctUntilChanged()
    ).subscribe((search) => {
      this.store.dispatch(loadSearch({ text: search }))
    }
    );
  }

}
