import { VComponent } from 'vienna-ts';

@VComponent({
  selector: 'wedstrijd-component',
  styles: [],
  html: `
    <navbar-component></navbar-component>
    
    <div class="container">
      Wedstrijd
    </div>
  `,
})
export class WedstrijdComponent {}
