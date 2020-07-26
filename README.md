# RecipeBook

Project created to learn Angular, following along the concepts learned in [this course](https://www.udemy.com/course/the-complete-guide-to-angular-2)

It includes, among others, examples of the following:
* Components and templates
* Dependency injection and services
* Observables and RxJS
* Form handling
* Code organization in modules
* Authentication
* Persistence through a backend REST API
* Routing, interceptors, guards
* Server-side rendering with Angular Universal
* NgRx (Redux pattern)

The project is deployed in https://recipe-book-ae7ea.web.app (as a static site on Firebase, without SSR)

As a backend, I'm using Firebase Realtime Database. The environment files with the API keys are public, as this is just a test app.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploying to firebase

Build for production with `ng build --prod`
Using the firebase-tools CLI, run `firebase deploy` once you're logged in

## Run a local Node server with Angular Universal
Build the app with `npm run build:ssr` and then `npm run serve:ssr`.
Both of this commands are aliases defined in the `package.json` file:

```json
"build:ssr": "npm run build:client-and-server-bundles && npm run compile:server",
"serve:ssr": "node dist/server",
```
