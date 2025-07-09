/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {App} from './app/app';
import { provideRouter } from '@angular/router';
import routerconfig from './app/routes';

bootstrapApplication(App, {providers: [provideProtractorTestingSupport(), provideRouter(routerconfig)]}).catch((err) =>
  console.error(err),
);
