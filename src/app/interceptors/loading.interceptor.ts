import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { changeLoading } from '../state/actions/artworks.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(changeLoading({ loading: true }));
    return next.handle(request).pipe(
      finalize(() => this.store.dispatch(changeLoading({ loading: false })))
    );
  }
}
