import { VComponent, VInit } from 'vienna-ts';

@VComponent({
  selector: 'home-component',
  styles: [],
  html: `
    <navbar-component></navbar-component>
    <video autoplay="" muted="" loop="" class="extern-aurora-hero-video">
        <source src="https://www.we-tri.nl/ext/triathlonrosmalen/vid/triathlonrosmalen.mp4" type="video/mp4">
        Jouw browser ondersteunt geen video.
    </video>
    <div class="counter">{{ count }}</div>
  `,
})
export class HomeComponent implements VInit {
  count = 0;

  vInit() {
    setInterval(() => this.count++, 1000);
  }
}
