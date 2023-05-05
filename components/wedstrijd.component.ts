import { VComponent } from 'vienna-ts';

@VComponent({
  selector: 'wedstrijd-component',
  styles: [],
  html: `
    <navbar-component></navbar-component>
    
    <div class="container">
      <sub-component items="{{ items }}"></sub-component>
    </div>
  `,
})
export class WedstrijdComponent {
  items: ['first', 'second'];
}
