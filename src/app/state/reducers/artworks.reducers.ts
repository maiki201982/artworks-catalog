import { createReducer, on } from "@ngrx/store";
import { ArtWorkState } from "src/app/interfaces/artwork.interfaces";
import { changeLoading, loadedArtWorks, loadSearch } from "../actions/artworks.actions";

export const initialState: ArtWorkState = { search: '', pagination: { }, artworks: [], loading: false };

export const artworksReducer = createReducer(
    initialState,
    on(loadedArtWorks, (state, { artworks }) => {
        return { ...state, pagination: artworks.pagination, artworks: artworks.artworks, search: artworks.search };
    }),

    on(loadSearch, (state, { text }) => {
        return { ...state, search: text }
    }),

    on(changeLoading, (state, { loading }) => {
        return { ...state, loading }
    }) 
)