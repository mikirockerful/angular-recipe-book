import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url !== 'https://recipe-book-ae7ea.firebaseio.com/recipes.json') {
      return next.handle(req.clone());
    } else {
      return this.authService.user.pipe(
        take(1),
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
