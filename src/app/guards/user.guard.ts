import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectActualUserToken } from '../state/selectors/users.selectors';

export const userGuard: CanActivateFn = (route, state) => {
  const store: Store<AppState> = inject(Store);
  return store.select(selectActualUserToken);
};
