import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    let authObs: Observable<AuthResponseData>
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(authForm.value.email, authForm.value.password);
    } else {
      authObs = this.authService.signup(authForm.value.email, authForm.value.password);
    }
    authObs.subscribe(responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
}
