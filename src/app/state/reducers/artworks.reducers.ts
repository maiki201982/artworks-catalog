import { createReducer, on } from "@ngrx/store";
import { ArtWorkState } from "src/app/interfaces/artwork.interfaces";
import { loadedArtWorks, loadSearch } from "../actions/artworks.actions";

export const initialState: ArtWorkState = { search: '', pagination: { }, artworks: [] };

export const artworksReducer = createReducer(
    initialState,
    on(loadedArtWorks, (state, { artworks }) => {
        return { ...state, pagination: artworks.pagination, artworks: artworks.artworks, search: artworks.search };
    }),

    on(loadSearch, (state, { text }) => {
        console.log('VBBBBBBB', text)
        return { ...state, search: text }
    })
)