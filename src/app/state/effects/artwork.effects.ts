import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { ArtworksService } from "src/app/services/artworksService";

@Injectable()
export class ArtWorkEffects {
    private actions$: Actions = inject(Actions);
    private artworksService: ArtworksService = inject(ArtworksService);

    loadArtWorks$ = createEffect(() => this.actions$.pipe(
        ofType('[ArtWorks List] Load ArtWorks'),
        mergeMap((action: any) => this.artworksService.getArtworks(action.text, action.page).pipe(
            map(artworks => ({ type: '[ArtWorks List] Loaded ArtWorks', artworks }))
        ))
    ));
}