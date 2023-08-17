import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { UsersService } from "src/app/services/usersService";

@Injectable()
export class UsersEffects {
    private actions$: Actions = inject(Actions);
    private usersService: UsersService = inject(UsersService);

    loadArtWorks$ = createEffect(() => this.actions$.pipe(
        ofType('[Users] Login'),
        mergeMap((action: any) => this.usersService.loginUser(action.name, action.pass).pipe(
            map(user => ({ type: '[Users] Loaded User', user }))
        ))
    ));
}