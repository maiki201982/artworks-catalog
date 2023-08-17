import { createSelector } from "@ngrx/store";
import { UserState } from "src/app/interfaces/user.interfaces";
import { AppState } from "../app.state";

export const selectUsersFeature = (state: AppState) => state.users;

export const selectActualUser = createSelector(
    selectUsersFeature,
    (state: UserState) => state.actualUser
)

export const selectActualUserToken = createSelector(
    selectUsersFeature,
    (state: UserState) => state.actualUser?.token !== undefined
)