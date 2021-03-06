import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== 'https://recipe-book-ae7ea.firebaseio.com/recipes.json') {
      return next.handle(req.clone());
    } else {
      return this.store.select('auth').pipe(
        take(1),
        map(authState => {
          return authState.user;
        }),
        exhaustMap(user => {
          const newReq = req.clone(
            {params: new HttpParams().set('auth', user.token)}
          );
          return next.handle(newReq);
        })
      );
    }
  }
}
