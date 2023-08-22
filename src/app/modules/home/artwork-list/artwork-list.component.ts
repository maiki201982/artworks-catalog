import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { loadArtWorks } from 'src/app/state/actions/artworks.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListArtWorks, selectLoading, selectPaginationArtWorks, selectSearch } from 'src/app/state/selectors/artworks.selectors';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit {

  artworks$: Observable<any> = new Observable();
  artworksPagination$: Observable<any> = new Observable();
  loading$: Observable<any> = new Observable();
  search: string = '';
  @ViewChild('paginator', { static: true }) paginator!: Paginator;
  
  private store: Store<AppState> = inject(Store);

  ngOnInit() {
    this.artworks$ = this.store.select(selectListArtWorks);
    this.artworksPagination$ = this.store.select(selectPaginationArtWorks);
    this.loading$ = this.store.select(selectLoading);
    
    const search$ =  this.store.select(selectSearch);
    search$.subscribe(search => {
      this.search = search;
      if (this.paginator?.totalRecords !== 0) {
        this.paginator?.changePage(0);
      }
      else {
        this.store.dispatch(loadArtWorks({ text: this.search, page: 1 }));
      }
    })
  }

  onPageChange(e: any) {
    this.store.dispatch(loadArtWorks({ text: this.search, page: e.page + 1 }));
  }
}
