import { createAction, props } from "@ngrx/store";
import { ArtWorkState } from "src/app/interfaces/artwork.interfaces";

export const loadArtWorks = createAction(
    '[ArtWorks List] Load ArtWorks',
    props<{ text: string, page: number }>()
);

export const loadedArtWorks = createAction(
    '[ArtWorks List] Loaded ArtWorks',
    props<{ artworks: ArtWorkState }>()
);

export const loadSearch = createAction(
    '[ArtWorks List] Change Search',
    props<{ text: string }>()
)

export const changeLoading = createAction(
    '[ArtWorks] Change Loading',
    props<{ loading: boolean }>()
)