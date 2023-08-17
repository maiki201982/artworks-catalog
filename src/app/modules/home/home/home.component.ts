import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interfaces';
import { AppState } from 'src/app/state/app.state';
import { selectActualUser } from 'src/app/state/selectors/users.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private store: Store<AppState> = inject(Store);
  private router: Router = inject(Router);
  user$: Observable<User | undefined> = new Observable()
  
  ngOnInit() {
    this.user$ = this.store.select(selectActualUser);
  }

  logout() {
    this.router.navigate(['']);
  }

}
