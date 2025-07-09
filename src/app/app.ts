import {Component} from '@angular/core';
// import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule],
  template: `
    <main>
      <a routerLink="/">
      <header class = "brand-name">
        <img class = "brand-logo" src = "assets/logo.svg" aria-hidden="true" />
      </header>
      </a>
      <section class = "content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}
