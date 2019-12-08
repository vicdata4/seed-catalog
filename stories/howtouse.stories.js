import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import '../components/seed-dropdown';

storiesOf('Seed', module)
  .add('How to use', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}

      * {
        color: white;
        font-family: monospace;
      }

      .package {
        color: white;
        white-space: pre;
        background-color: #272727;
        font-size: 15px;
      }
    </style>

    <button class="sd-btn lg black">How to use</button>
    <br><br>
    <span>Lit-element is required</span><br><br>
    <span class="light-txt">Add seed-catalog to your package.json as below</span>
    <p class="package">
    "dependencies": {
      ...

      "lit-element": <span class="light-txt">"^2.0.1"</span>,
      "seed-catalog": <span class="light-txt">"git://github.com/vicdata4/seed-catalog.git"</span>
    }
    </p>
    <span>Install dependencies into your node_modules</span>
    <p class="package">
      npm install
    </p>
    <span>Import seed-catalos styles</span>
    <p class="package">
      import { <span class="light-txt">seedStyle</span> } from <span class="light-txt">'seed-catalog/styles.js'</span>;
    </p>
    <span>Import a component</span>
    <p class="package">
      import <span class="light-txt">'seed-catalog/dropdown.js'</span>;
      import <span class="light-txt">'seed-catalog/collapse.js'</span>;
      import <span class="light-txt">'seed-catalog/carousel.js'</span>;
      import <span class="light-txt">'seed-catalog/modal.js'</span>;
    </p>
    <span>Lit-element example Carousel</span>
    <p class="package">
      import { <span class="light-txt">seedStyle</span> } from <span class="light-txt">'seed-catalog/styles.js'</span>;
      import <span class="light-txt">'seed-catalog/carousel.js'</span>;

      class <span class="green-mate">MyComponent</span> extends <span class="light-txt">LitElement</span> {

        static get styles() {
          return [
              seedStyle,
              css\`
                ...
              \`
          ];
        }

        render() {
         return html\`
          ${`<seed-carousel arrows stepper>
            <div class="black">Black</div>
            <div class="red">Red</div>
            <div class="blue">Blue</div>
            <div class="green">Green</div>
          </seed-carousel>`}
         \`;
        }
      }
    </p>
    `);
