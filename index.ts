import { VApplication, VRouteNotFoundStrategy } from 'vienna-ts';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './components/navbar.component';
import { WedstrijdComponent } from './components/wedstrijd.component';

@VApplication({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/wedstrijd', component: WedstrijdComponent },
  ],
  declarations: [HomeComponent, NavbarComponent, WedstrijdComponent],
  rootElementSelector: 'body',
  routeNotFoundStrategy: VRouteNotFoundStrategy.ROOT,
  globalStyles: [
    {
      style: `
        a { text-decoration: none; color: #fff; },
        a:hover { color: #46c6eb; }
      `,
    },
  ],
})
class Application {}

// Initialize app
new Application();
