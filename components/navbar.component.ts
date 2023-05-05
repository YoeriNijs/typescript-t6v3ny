import { VComponent } from 'vienna-ts';

@VComponent({
  selector: 'navbar-component',
  styles: [
    `
      .navbar {
        background-color: black;
        padding: 8px;
        border-bottom: 1px solid black;
        color: #fff;
      }

      .item:hover {
        color: #46c6eb;
        cursor: pointer;
      }
    `,
  ],
  html: `
    <div class="navbar">
      <a href="#/wedstrijd" class="item">Wedstrijd</a>
      <a href="#/media" class="item">Media</a>
    </div>
  `,
})
export class NavbarComponent {}
