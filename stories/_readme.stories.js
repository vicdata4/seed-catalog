import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import '../components/seed-dropdown';

storiesOf('Seed', module)
  .add('Intro', () => html`
        <style>
      ${seedStyle}
      ${storyCommonStyles}

      h2, p {
        color: red;
      }

      h2:hover, h5:hover {
        cursor: unset;
        background-color: none;
      }

      .light {
        color: #e4bb05;
        font-size: 1.5rem;
      }

      .decorator {
        color: #e4bb05;
      }

      a {
        color: #989898;
        text-decoration: none;
      }

      .paragraph {
        color: #0eff0e;
        font-size: 15px;
        font-family: monospace;
      }
    
    </style>
    <button class="sd-btn-mix black"><i class="material-icons blue-mate">extension</i>Seed Catalog <span style="font-size: 10px;">v1.0</span></button><br>
    <p class="paragraph">Seed Catalog is a free and open-source <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" class="sd-btn-mix sm black">web-components</a> library. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.</p>
    <p class="paragraph">We use
      <a href="https://lit-element.polymer-project.org/" target="_blank" class="sd-btn-mix sm black">LitElement</a>,
      <a href="https://javascript.info/" target="_blank" class="sd-btn-mix sm black">Javascript ES6</a>,
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" class="sd-btn-mix sm black">HTML5</a>
      and
      <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" class="sd-btn-mix sm black">CSS3</a>
    </p>
      <p class="paragraph">Check out the <a href="https://github.com/vicdata4/seed-catalog/blob/master/README.md" target="_blank" class="sd-btn-mix sm black">README.md</a> file to learn more about how to use it.</p>
      <a href="https://seed-project.dev/" target="_blank" class="sd-btn sm black">seed-project.dev</a><br><br>
      <a href="https://github.com/vicdata4/seed-catalog" target="_blank" class="sd-btn sm blue-mate">GitHub repository</a>
      <br><br>
      <button class="sd-btn-mix sm black"><i class="material-icons blue-mate">list</i>List of components</button><br><br>
      <button class="sd-btn-mix sm black"><i class="material-icons green">touch_app</i>Buttons</button>
      <button class="sd-btn-mix sm black"><i class="material-icons blue-mate">keyboard_arrow_down</i>Dropdown</button>
      <button class="sd-btn-mix sm black"><i class="material-icons purple">keyboard_arrow_down</i>Collapse</button>
      <button class="sd-btn-mix sm black"><i class="material-icons yellow">web_asset</i>Modals</button>
      <button class="sd-btn-mix sm black"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
      <button class="sd-btn-mix sm black"><i class="material-icons red">settings_overscan</i>Carousel</button>
      <button class="sd-btn-mix sm black"><i class="material-icons orange">filter_tilt_shift</i>Spinner</button>
      <button class="sd-btn-mix sm black"><i class="material-icons blue">menu</i>Accordion</button>
    `);
