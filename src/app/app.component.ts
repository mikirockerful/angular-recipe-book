import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {isPlatformBrowser} from '@angular/common';
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-book';

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
  }
}
