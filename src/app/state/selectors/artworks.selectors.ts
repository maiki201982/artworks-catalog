import { createSelector } from "@ngrx/store";
import { ArtWorkState } from "src/app/interfaces/artwork.interfaces";
import { AppState } from "../app.state";

export const selectArtworksFeature = (state: AppState) => state.artworks;

export const selectListArtWorks = createSelector(
    selectArtworksFeature,
    (state: ArtWorkState) => state.artworks
)

export const selectPaginationArtWorks = createSelector(
    selectArtworksFeature,
    (state: ArtWorkState) => state.pagination
)

export const selectSearch = createSelector(
    selectArtworksFeature,
    (state: ArtWorkState) => state.search
)