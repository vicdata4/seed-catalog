import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';

import '../components/basic-button';
import { seedButtonStyle } from '../styles';

storiesOf('Seed Library', module)
  //.add('BasicButton', () => html`<basic-button>Submit</basic-button>`)
  .add('Buttons', () => html`
    <style>
      ${seedButtonStyle}

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
    </style>
    <h2 class="sd-btn black">Class <span class="light">sd-btn</span> for ${'<button> && <a>'} tags</h2>
    <h5 class="sd-btn black">${'<button class="'}<span style="color: #e4bb05">sd-btn red</span>${'">Home</button>'}</h5>
    <h5 class="sd-btn black">${'<a class="'}<span style="color: #e4bb05">sd-btn blue</span>${'">Home</a>'}</h5>
    <div class="container" style="background-color: #292929;">
      <button class="sd-btn">Submit</button>
      <button class="sd-btn red">Red</button>
      <button class="sd-btn green">Success</button>
      <button class="sd-btn blue">Submit</button>
      <button class="sd-btn blue-mate">Mate</button>
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn purple">Purple</button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn orange">Orange</button>
      <button class="sd-btn blue" disabled>Success</button> <br>
      <button class="sd-btn sm yellow">Yellow</button>
      <button class="sd-btn sm purple">Purple</button>
      <button class="sd-btn sm black">Black</button>
      <button class="sd-btn sm orange">Orange</button>
      <button class="sd-btn sm blue">Submit</button><br>
      <button class="sd-btn lg">White</button>
      <button class="sd-btn lg red">Red</button>
      <button class="sd-btn lg green">Green</button>
      <button class="sd-btn lg blue">Blue</button>
      <button class="sd-btn lg orange">Success</button> <br></br>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn" disabled>Submit</button>
      <button class="sd-btn blue" disabled>Blue</button>
    </div>
    <h2 class="sd-btn black">Class <span class="light">sd-icon</span> and <span class="light">sd-icon circle</span> for ${'<button> && <a>'} tags</h2>
    <h2 class="sd-btn black">Buttons with icons</h2>
      <h5 class="sd-btn black"><span class="decorator">Material Icons </span><a href="https://material.io/resources/icons/?style=baseline" target="_blank">Material Icons Documentation</a></h5>
      <h5 class="sd-btn black"><span class="decorator">${'<button class="sd-icon">'}</span><span class="decorator">${'<i class="material-icons">close</i>'}</span>${'</button>'}</h5>
      <button class="sd-icon red circle"><i class="material-icons">close</i></button>
      <button class="sd-icon green"><i class="material-icons">home</i></button>
      <button class="sd-icon blue"><i class="material-icons">add</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">remove</i></button>
      <button class="sd-icon green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-icon green yellow circle"><i class="material-icons">expand_more</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">menu</i></button>

      <button class="sd-icon red lg"><i class="material-icons">face</i></button>
      <button class="sd-icon green lg circle"><i class="material-icons">people</i></button>
      <button class="sd-icon blue lg"><i class="material-icons">menu</i></button>

      <button class="sd-icon red sm"><i class="material-icons">close</i></button>
      <button class="sd-icon red sm circle"><i class="material-icons">close</i></button>
      <button class="sd-icon yellow sm"><i class="material-icons">folder</i></button>
      <button class="sd-icon green sm circle"><i class="material-icons">home</i></button>
      <button class="sd-icon blue sm"><i class="material-icons">menu</i></button>
      <button class="sd-icon blue sm circle"><i class="material-icons">face</i></button>
      <br/><br/><br/><br/>
      <h2 class="sd-btn black">Class <span class="light">sd-btn-mix</span> for ${'buttons with icons and text'}. <span class="decorator">Support fa and material icons</span></h2>
      <button class="sd-btn-mix red sm"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red lg"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">warning</i>Warning message</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <br/><br/><br/><br/>
      <h2 class="sd-btn black">Class <span class="light">sd-btn-mixr</span> </h2>
    </div>
  `);