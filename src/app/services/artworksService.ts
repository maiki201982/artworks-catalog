import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { ArtWorkState } from "../interfaces/artwork.interfaces";

@Injectable({
    providedIn: 'root'
  })
export class ArtworksService {

    private httpClient: HttpClient = inject(HttpClient);
    
    getArtworks(search: string, page: number): Observable<ArtWorkState> {
        
        let url = search !== '' ? `/search?query[match][title]=${search}&page=${page}&fields=id,title,image_id,artist_display&limit=12` : `?page=${page}&fields=id,title,image_id,artist_display`;
        
        return this.httpClient.get(url).pipe(map((results: any) => {
            return {
                artworks: results.data,
                pagination: results.pagination,
                search
            }
        }))
    }

}