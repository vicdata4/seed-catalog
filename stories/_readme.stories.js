import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import { seedStyle } from '../styles';
import '../components/seed-dropdown';

storiesOf('Seed', module)
  .add('Intro', () => html`
        <style>
      ${seedStyle}

      html {
      --seed-color-red: #de3d4c;
      --seed-color-red-focus: #ff00184d;
      --seed-color-red-hover: #bb3440;

      --seed-color-green: #22ac41;
      --seed-color-green-focus: #7fc72a45;
      --seed-color-green-hover: #199936;

      --seed-color-blue: #2dabb4;
      --seed-color-blue-focus: #2dabb445;
      --seed-color-blue-hover: #239aa3;

      --seed-color-yellow: #e6af0e;
      --seed-color-yellow-focus: #c89a0c3d;
      --seed-color-yellow-hover: #d5a927;

      --seed-color-purple: #903e8d;
      --seed-color-purple-focus: #903e8d5e;
      --seed-color-purple-hover: #663564;

      --seed-color-black: #2f2d2d;
      --seed-color-black-focus: #43434387;
      --seed-color-black-hover: #434343;

      --seed-color-orange: #d58309;
      --seed-color-orange-focus: #e09e2057;
      --seed-color-orange-hover: #b46e06;

      --seed-color-green-mate: #1C8281;
      --seed-color-green-mate-focus: #2dabb445;
      --seed-color-green-mate-hover: rgb(51, 121, 120);

      --seed-color-red-mate: #bf4545;
      --seed-color-red-mate-focus: #ff00184d;
      --seed-color-red-mate-hover: rgb(176, 63, 63);

      --seed-color-blue-mate: rgb(63, 118, 182);
      --seed-color-blue-mate-focus: #2dabb445;
      --seed-color-blue-mate-hover: rgb(53, 98, 149);
    }

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
    <button class="sd-btn-mix sm black"><i class="material-icons red">web_asset</i>Carousel</button>
    <button class="sd-btn-mix sm black"><i class="material-icons green">touch_app</i>Buttons</button>
    <button class="sd-btn-mix sm black"><i class="material-icons blue">web_asset</i>Modals</button>
    <button class="sd-btn-mix sm black"><i class="material-icons yellow">keyboard_arrow_down</i>Dropdown</button>
    <button class="sd-btn-mix sm black"><i class="material-icons purple">keyboard_arrow_down</i>Collapse</button>
    <button class="sd-btn-mix sm black"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
    `);
