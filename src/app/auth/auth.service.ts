import {Injectable} from '@angular/core';
import * as fromApp from '../store/app.reducer';
import {Store} from '@ngrx/store';
import * as AuthActions from '../auth/store/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>) {
  }

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      this.tokenExpirationTimer = null;
    }
  }

}
