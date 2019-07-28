import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../buttons/basic-button';

storiesOf('Seed views', module)
  .add('BasicButton', () => html`<basic-button>Submit</basic-button>`);