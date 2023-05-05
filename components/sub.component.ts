import { VComponent, VInit, VProp } from 'vienna-ts';

@VComponent({
  selector: 'sub-component',
  styles: [],
  html: `
    <v-switch condition="{{ name }}">
      <v-case if="admin">
        May the force be with you!
      </v-case>
      <v-case if="member">
        You have limited force here...
      </v-case>
      <v-case-default>
        You have no force here.
      </v-case-default>
    </v-switch>
`,
})
export class SubComponent implements VInit {
  @VProp() active = '';
  @VProp() items = null;

  vInit() {
    console.log(this.items);
  }
}
