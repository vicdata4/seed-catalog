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
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn purple">Purple</button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn orange">Orange</button>
    </div>
    <h2 class="sd-btn black">Disabled buttons</h2>
    <div class="container">
      <h5 class="sd-btn black">${'<button class="sd-btn" '}<span class="decorator">disabled</span>${'>Home</button>'}</h5>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn" disabled>Submit</button>
      <button class="sd-btn green" disabled>Success</button>
      <button class="sd-btn blue" disabled>Blue</button>
    </div>
    <h2 class="sd-btn black">Buttons with icons</h2>
      <!--
    <div class="container" style="background-color: #292929;">
      <h5 class="sd-btn black"><span class="decorator">Fa Icons </span> <a href="https://fontawesome.com/v4.7.0/examples/" target="_blank">Fa Documentation</a></h5>
      <h5 class="sd-btn black">${'<button class="sd-btn red">'}<span class="decorator">${'<i class="fa fa-close"></i>'}</span>${'</button>'}</h5>
      <h5 class="sd-btn black">${'<button class="sd-btn red '}<span class="decorator">circle</span>${'">'}<span class="decorator">${'<i class="fa fa-close"></i>'}</span>${'</button>'}</h5>
      <button class="sd-btn red circle"><i class="fa fa-close"></i></button>
      <button class="sd-btn yellow circle"><i class="fa fa-key"></i></button>
      <button class="sd-btn blue circle"><i class="fa fa-folder"></i></button>
      <button class="sd-btn green"><i class="fa fa-folder"></i></button>
      <button class="sd-btn green circle"><i class="fa fa-arrow-right"></i></button>
      <button class="sd-btn blue circle"><i class="fa fa-bars"></i></button>

      <button class="sd-btn red lg"><i class="fa fa-close"></i></button>
      <button class="sd-btn green lg circle"><i class="fa fa-home"></i></button>
      <button class="sd-btn blue lg circle"><i class="fa fa-user"></i></button>

      <button class="sd-btn red sm"><i class="fa fa-close"></i></button>
      <button class="sd-btn green sm circle"><i class="fa fa-home"></i></button>
      <button class="sd-btn blue sm"><i class="fa fa-bars"></i></button>
      </div>
      -->
      <h5 class="sd-btn black"><span class="decorator">Material Icons </span><a href="https://material.io/resources/icons/?style=baseline" target="_blank">Material Icons Documentation</a></h5>
      <h5 class="sd-btn black">${'<button class="sd-btn">'}<span class="decorator">${'<i class="material-icons">close</i>'}</span>${'</button>'}</h5>
      <button class="sd-btn red circle"><i class="material-icons">close</i></button>
      <button class="sd-btn green"><i class="material-icons">home</i></button>
      <button class="sd-btn green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-btn green yellow circle"><i class="material-icons">expand_more</i></button>
      <button class="sd-btn blue circle"><i class="material-icons">menu</i></button>

      <button class="sd-btn red lg"><i class="material-icons">face</i></button>
      <button class="sd-btn green lg circle"><i class="material-icons">people</i></button>
      <button class="sd-btn blue lg"><i class="material-icons">menu</i></button>

      <button class="sd-btn red sm"><i class="material-icons">close</i></button>
      <button class="sd-btn green sm circle"><i class="material-icons">home</i></button>
      <button class="sd-btn blue sm"><i class="material-icons">menu</i></button>
      <button class="sd-btn blue sm circle"><i class="material-icons">face</i></button>
      <br/><br/><br/><br/>
      <h2 class="sd-btn black">Class <span class="light">sd-btn-mix</span> for ${'buttons with icons and text'}. <span class="decorator">Support fa and material icons</span></h2>
      <!--<div>
      <h5 class="sd-btn black"><span class="decorator">Fa Icons</span></h5>
      <h5 class="sd-btn black">${'<button class="'}<span class="decorator">sd-btn-mix red</span>${'">'}<span class="decorator">${'<i class="fa fa-close"></i>'}</span>${'Cancel payment</button>'}</h5>
      <button class="sd-btn-mix red sm"><i class="fa fa-close"></i>Cancel payment</button>
      <button class="sd-btn-mix red"><i class="fa fa-close"></i>Cancel payment</button>
      <button class="sd-btn-mix red lg"><i class="fa fa-close"></i>Cancel payment</button>
      <button class="sd-btn-mix blue"><i class="fa fa-folder"></i>Folders</button>
      <button class="sd-btn-mix blue"><i class="fa fa-spinner fa-spin fa-fw"></i>Downloading</button>

      <h5 class="sd-btn black"><span class="decorator">Material Icons </span></h5>
      <h5 class="sd-btn black">${'<button class="'}<span class="decorator">sd-btn-mix red</span>${'">'}<span class="decorator">${'<i class="material-icons">close</i>'}</span>${'Cancel payment</button>'}</h5>
      -->
      <button class="sd-btn-mix red sm"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red lg"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">warning</i>Warning message</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <br/><br/><br/><br/>
      <h2 class="sd-btn black">Class <span class="light">sd-btn-mixr</span> </h2>
      <!--
      <h5 class="sd-btn black">${'<button class="'}<span class="decorator">sd-btn-mixr red</span>${'">'}Download files<span class="decorator">${'<i class="fa fa-cloud-download"></i>'}</span>${'</button>'}</h5>
      <button class="sd-btn-mixr green sm">Download files<i class="fa fa-cloud-download"></i></button>
      <button class="sd-btn-mixr green">Download files<i class="fa fa-cloud-download"></i></button>
      <button class="sd-btn-mixr green lg">Download files<i class="fa fa-cloud-download"></i></button>-->
      
    </div>
  `);