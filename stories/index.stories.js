import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../components/basic-button';
import { seedButtonStyle } from '../styles';

storiesOf('Seed views', module)
  .add('BasicButton', () => html`<basic-button>Submit</basic-button>`)
  .add('Button style', () => html`
      <style>${seedButtonStyle}</style>
      <button class="sd-btn green">Hellow</button>
  `);