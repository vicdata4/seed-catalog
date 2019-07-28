import { storiesOf, html } from '@open-wc/demoing-storybook';

import '../components/basic-button';
import { seedButtonStyle } from '../styles';

storiesOf('Seed views', module)
  .add('BasicButton', () => html`<basic-button>Submit</basic-button>`)
  .add('Button style', () => html`
      <style>
        ${seedButtonStyle}

        div {
          padding: 10px;
          min-height: 200px;
        }
      </style>
      <p style="color:white;">Button suite</p>
      <div style="background-color: #292929;">
      <button class="sd-btn">Submit</button>
      <button class="sd-btn red">Home</button>
      <button class="sd-btn green">About us</button>
      <button class="sd-btn blue">Contact</button>
      </div>
      <div style="background-color: #ededed;">
      <button class="sd-btn">Submit</button>
      <button class="sd-btn red">Home</button>
      <button class="sd-btn green">About us</button>
      <button class="sd-btn blue">Contact</button>
      </div>
  `);