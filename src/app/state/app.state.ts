import { ActionReducerMap } from "@ngrx/store";
import { ArtWorkState } from "../interfaces/artwork.interfaces";
import { UserState } from "../interfaces/user.interfaces";
import { artworksReducer } from "./reducers/artworks.reducers";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState {
    artworks: ArtWorkState,
    users: UserState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    artworks: artworksReducer,
    users: usersReducer
}