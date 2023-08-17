import { createAction, props } from "@ngrx/store";
import { UserState } from "src/app/interfaces/user.interfaces";

export const loginUser = createAction(
    '[Users] Login',
    props<{ name: string, pass: string }>()
);

export const loadedUser = createAction(
    '[Users] Loaded User',
    props<{ user: UserState }>()
);