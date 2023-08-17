import { createReducer, on } from "@ngrx/store";
import { UserState } from "src/app/interfaces/user.interfaces";
import { loadedUser } from "../actions/users.actions";

export const initialState: UserState = { actualUser: { } };

export const usersReducer = createReducer(
    initialState,
    
    on(loadedUser, (state, { user }) => {
        return { ...state, actualUser: user.actualUser }
    })
)