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

      * {
        color: white;
        font-family: monospace;
      }

      .package {
        overflow: scroll;
        color: white;
        white-space: pre;
        background-color: #272727;
        font-size: 15px;
      }

      .yellou {
        color: #e8e191;
      }

      .gree {
        color: #0cc782;
      }

      .blu {
        color: #2f9dec;
      }

      .purp {
        color: #c77ada;
      }

      .ora {
        color: #e0b669;
      }

      .gre {
        color: grey;
      }
    
    </style>
    <button class="sd-btn-mix black"><i class="material-icons blue-mate">extension</i>Seed Catalog <span style="font-size: 10px;">v1.0</span></button><br>
    <p class="paragraph gree">Seed Catalog is a free and open-source <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" class="sd-btn-mix sm black">web-components</a> library. It contains CSS-styles and standard-web based templates such as buttons, modals, dropdowns and other interface components.</p>
    <p class="paragraph gree">We use
      <a href="https://lit-element.polymer-project.org/" target="_blank" class="sd-btn-mix sm black">LitElement</a>,
      <a href="https://javascript.info/" target="_blank" class="sd-btn-mix sm black">Javascript ES6</a>,
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" class="sd-btn-mix sm black">HTML5</a>
      and
      <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank" class="sd-btn-mix sm black">CSS3</a>
    </p>
      
      <button class="sd-btn-mix sm black"><i class="material-icons green">touch_app</i>Buttons</button>
      <button class="sd-btn-mix sm black"><i class="material-icons blue-mate">keyboard_arrow_down</i>Dropdown</button>
      <button class="sd-btn-mix sm black"><i class="material-icons purple">keyboard_arrow_down</i>Collapse</button>
      <button class="sd-btn-mix sm black"><i class="material-icons yellow">web_asset</i>Modals</button>
      <button class="sd-btn-mix sm black"><i class="material-icons green-mate">more_horiz</i>Stepper</button>
      <button class="sd-btn-mix sm black"><i class="material-icons red">settings_overscan</i>Carousel</button>
      <button class="sd-btn-mix sm black"><i class="material-icons orange">filter_tilt_shift</i>Spinner</button>
      <button class="sd-btn-mix sm black"><i class="material-icons blue">menu</i>Accordion</button>
      <br><br><br><br>
    <button class="sd-btn-mix black"><i class="material-icons yellow">star_border</i>Quick Start</button>
    <br><br>
    <span>Lit-element is required</span><br><br>
    <span class="light-txt">Add seed-catalog to your package.json as below</span>
    <p class="package">
    <span class="light-txt">"dependencies"</span>: {
      ...

      <span class="light-txt">"lit-element"</span>: <span class="ora">"^2.0.1"</span>,
      <span class="light-txt">"seed-catalog"</span>: <span class="ora">"git://github.com/vicdata4/seed-catalog.git"</span>
    }
    </p>
    <span>Install dependencies into your node_modules</span>
    <p class="package">
      <span class="gree">npm install</span>
    </p>
    <span>Import seed-catalog styles</span>
    <p class="package">
    <span class="purp">import</span> { <span class="light-txt">seedStyle</span> } <span class="purp">from</span> <span class="ora">'seed-catalog/styles.js'</span>;
    </p>
    <span>Import a component</span>
    <p class="package">
    <span class="purp">import</span> <span class="ora">'seed-catalog/dropdown.js'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/collapse.js'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/carousel.js'</span>;
    <span class="purp">import</span> <span class="ora">'seed-catalog/modal.js'</span>;
    </p>
    <span class="light-txt">Dropdown example </span>
    <p class="package">
      <span class="purp">import</span> { <span class="light-txt">LitElement, html, css</span> } <span class="purp">from</span> <span class="ora">'lit-element'</span>;
      <span class="purp">import</span> { <span class="light-txt">seedStyle</span> } <span class="purp">from</span> <span class="ora">'seed-catalog/styles.js'</span>;
      <span class="purp">import</span> <span class="ora">'seed-catalog/dropdown.js</span>';

      <span class="blu">class</span> <span class="gree">MyComponent</span> <span class="blu">extends</span> <span class="gree">LitElement</span> {
        <span class="blu">static get</span> <span class="yellou">styles</span>() {
          <span class="purp">return</span> [
            <span class="light-txt">seedStyle</span>,
            <span class="yellou">css</span>\`
              ...
            \`
          ];
        }
        <span class="gre"></span>
        <span class="yellou">render</span>() {
          <span class="purp">return</span> <span class="yellou">html</span>\`
            <span class="gre"><</span><span class="blu">${`seed-dropdown `}</span><span class="light-txt">${`maxWidth=`}<span class="ora">${`"300"`}</span>${` clickout`}</span><span class="gre">></span>
              <span class="gre"><</span><span class="blu">${`button `}</span><span class="light-txt">${`slot`}</span>${`=`}<span class="ora">${`"button" `}</span><span class="light-txt">${`class`}</span>${`=`}<span class="ora">${`"sd-btn red"`}</span><span class="gre">></span>${`Dropdown`}<span class="gre">${`</`}</span><span class="blu">${`button`}</span><span class="gre">></span>
              <span class="gre"><</span><span class="blu">${`p `}</span><span class="light-txt">${`slot`}</span>${`=`}<span class="ora">${`"content"`}</span><span class="gre">></span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras ut viverra leo, vel dapibus quam. Proin a sollicitudin quam,
                eget viverra diam. Donec euismod mattis dignissim.
              <span class="gre">${`</`}</span><span class="blu">${`p`}</span><span class="gre">></span>
            <span class="gre">${`</`}</span><span class="blu">${`seed-dropdown`}</span><span class="gre">></span>
          \`;
        }
      }
    </p>
    <a href="https://seed-project.dev/" target="_blank" class="sd-btn sm black">seed-project.dev</a><br><br>
    <a href="https://github.com/vicdata4/seed-catalog" target="_blank" class="sd-btn sm blue-mate">GitHub repository</a>
    `);
