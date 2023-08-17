import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interfaces';

import { loginUser } from 'src/app/state/actions/users.actions';
import { AppState } from 'src/app/state/app.state';
import { selectActualUser } from 'src/app/state/selectors/users.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private router: Router = inject(Router);
  private store: Store<AppState> = inject(Store);

  actualUser$!: Observable<User | undefined>;
  
  name: FormControl = new FormControl('', Validators.required);
  pass: FormControl = new FormControl('', Validators.required);

  ngOnInit() {
    this.actualUser$ = this.store.select(selectActualUser)
  }
  
  login() {
    this.store.dispatch(loginUser({ name: this.name.value, pass: this.pass.value }))
    this.router.navigate(['home']);
  }

}
