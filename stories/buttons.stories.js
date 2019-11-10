import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedButtonStyle } from '../styles';

storiesOf('Seed Catalog', module)
  .add('Buttons', () => html`
    <style>
      ${seedButtonStyle}

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

      
    
    </style>
    <h2 class="sd-btn black">Class for ${'<button> && <a>'} tags</h2><br>
    <h2 class="sd-btn black sm"><span class="light">Color list</span></h2>
    <button class="sd-btn sm red">red</button>
    <button class="sd-btn sm blue">blue</button>
    <button class="sd-btn sm green">green</button>
    <button class="sd-btn sm yellow">yellow</button>
    <button class="sd-btn sm purple">purple</button>
    <button class="sd-btn sm black">black</button>
    <button class="sd-btn sm orange">orange</button>
    <button class="sd-btn sm red-mate">red-mate</button>
    <button class="sd-btn sm blue-mate">blue-mate</button>
    <button class="sd-btn sm green-mate">green-mate</button>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn</span></h2><button class="sd-btn red-mate">Classic</button><br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn-mix</span></h2><button class="sd-btn-mix green"><i class="material-icons">flight</i>Flight</button><br>
    <h2 class="sd-btn black sm"><span class="light">sd-icon</span></h2><button class="sd-icon yellow"><i class="material-icons">create</i></button><button class="sd-icon green"><i class="material-icons">call</i></button><button class="sd-icon red"><i class="material-icons">home</i></button><button class="sd-icon blue"><i class="material-icons">lock</i></button><br>
    <h2 class="sd-btn black sm"><span class="light">sd-icon circle</span></h2><button class="sd-icon circle blue"><i class="material-icons">face</i></button><button class="sd-icon circle red"><i class="material-icons">star</i></button><button class="sd-icon circle green"><i class="material-icons">lock</i></button><br>
    <h2 class="sd-btn black sm"><span class="light">material-icons color</span></h2><i class="material-icons yellow">face</i><i class="material-icons blue">star</i></button><i class="material-icons green lg">lock</i><i class="material-icons red lg">flight</i><i class="material-icons yellow lg">cloud</i><i class="material-icons blue sm">face</i><i class="material-icons green sm">home</i><i class="material-icons orange sm">folder</i>
    <br>
    <div class="container" style="background-color: #292929;">
      <button class="sd-btn-mixr purple">Auth<i class="material-icons">lock</i></button>
      <button class="sd-btn">Submit</button>
      <button class="sd-btn red">Red</button>
      <button class="sd-icon blue"><i class="material-icons">add</i></button>
      <button class="sd-icon blue-mate"><i class="material-icons">folder</i></button>
      <button class="sd-icon green circle"><i class="material-icons">face</i></button>
      <button class="sd-btn red-mate">Red Mate</button>
      <button class="sd-icon orange circle"><i class="material-icons">pie_chart</i></button>
      <button class="sd-btn green">success</button>
      <button class="sd-btn-mix green"><i class="material-icons">folder</i>Success</button>
      <button class="sd-btn-mix blue" disabled><i class="material-icons">face</i>Disabled</button>
      <button class="sd-btn blue">Submit</button>
      <button class="sd-btn blue" disabled>Disabled</button>
      <button class="sd-btn blue-mate">Mate</button>
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn purple">Purple</button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <button class="sd-btn orange">Orange</button>
      <button class="sd-btn-mix red sm"><i class="material-icons">close</i>Cancel payment</button>
      <button class="sd-btn-mix red lg"><i class="material-icons">lock</i>Lock</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">warning</i>Warning message</button>
      <button class="sd-btn sm yellow">Yellow</button>
      <button class="sd-btn sm purple">Purple</button>
      <button class="sd-btn sm black">Black</button>
      <button class="sd-icon red lg"><i class="material-icons">face</i></button>
      <button class="sd-btn sm orange">Orange</button>
      <button class="sd-btn sm blue">Submit</button>
      <button class="sd-btn lg">White</button>
      <button class="sd-btn lg red">Red</button>
      <button class="sd-btn lg green">Green</button>
      <button class="sd-btn lg blue">Blue</button>
      <button class="sd-btn lg orange">ING</button>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn" disabled>Disabled</button>
      <button class="sd-btn blue" disabled>Blue</button>
      <button class="sd-icon red circle"><i class="material-icons">close</i></button>
      <button class="sd-icon green"><i class="material-icons">home</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">navigation</i></button>
      <button class="sd-icon green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-icon green yellow circle"><i class="material-icons">public</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">menu</i></button>  
      <button class="sd-icon green lg circle"><i class="material-icons">people</i></button>
      <button class="sd-icon blue lg"><i class="material-icons">flight</i></button>
      <button class="sd-icon green lg"><i class="material-icons">palette</i></button>
      <button class="sd-icon red lg"><i class="material-icons">timer</i></button>
      <button class="sd-icon red sm"><i class="material-icons">pie_chart</i></button>
      <button class="sd-icon red sm circle"><i class="material-icons">cloud_done</i></button>
      <button class="sd-icon yellow sm"><i class="material-icons">face</i></button>
      <button class="sd-btn">Apple</button>
      <button class="sd-btn red">Santander</button>
      <button class="sd-icon blue"><i class="material-icons">add</i></button>
      <button class="sd-icon blue sm"><i class="material-icons">menu</i></button>
      <button class="sd-icon blue-mate"><i class="material-icons">gps_fixed</i></button>
      <button class="sd-icon green circle"><i class="material-icons">face</i></button>
      <button class="sd-btn red-mate">Red Mate</button>
      <button class="sd-icon red-mate circle"><i class="material-icons">audiotrack</i></button>
      <button class="sd-btn black">Black</button>
      <button class="sd-btn green">send</button>
      <button class="sd-icon blue lg"><i class="material-icons">menu</i></button>
      <button class="sd-btn-mix green"><i class="material-icons">flag</i>Country</button>
      <button class="sd-btn-mix blue"><i class="material-icons">cloud</i>Cloud</button>
      <button class="sd-btn orange">Art</button>
      <button class="sd-btn-mix red" disabled><i class="material-icons">face</i>Disabled</button>
      <button class="sd-btn blue">Submit</button>
      <button class="sd-btn yellow">Yellow</button>
      <button class="sd-btn-mix black"><i class="material-icons">lock</i>Lock account</button>
      <button class="sd-icon blue sm circle"><i class="material-icons">face</i></button>
      <button class="sd-btn black" disabled>Disabled</button>
      <button class="sd-icon green lg circle"><i class="material-icons">phone</i></button>
      <button class="sd-btn blue-mate">Display</button>
      <button class="sd-btn purple">Dates</button>
      <button class="sd-btn sm yellow">Yellow</button>
      <button class="sd-btn-mix yellow"><i class="material-icons">credit_card</i>Credit card</button>
      <button class="sd-btn sm purple">Example</button>
      <button class="sd-btn sm black">Dark</button>
      <button class="sd-btn-mix red sm"><i class="material-icons">archive</i>Inbox</button>
      <button class="sd-btn sm blue">Log in</button>
      <button class="sd-icon green"><i class="material-icons">home</i></button>
      <button class="sd-btn-mix red lg"><i class="material-icons">flight</i>Flight</button>
      <button class="sd-btn sm orange">Model Bank</button>
      <button class="sd-btn lg blue-mate">BBVA</button>
      <button class="sd-icon green sm circle"><i class="material-icons">home</i></button>
      <button class="sd-btn lg red">Ferrari</button>
      <button class="sd-btn" disabled>Disabled</button>
      <button class="sd-icon red lg"><i class="material-icons">face</i></button>
      <button class="sd-btn lg orange">Deploy</button>
      <button class="sd-btn blue" disabled>Blue</button>
      <button class="sd-icon green yellow circle"><i class="material-icons">expand_more</i></button>
      <button class="sd-icon blue circle"><i class="material-icons">remove</i></button>
      <button class="sd-icon yellow sm"><i class="material-icons">search</i></button>
      <button class="sd-icon green circle"><i class="material-icons">chevron_right</i></button>
      <button class="sd-btn red" disabled>Red</button>
      <button class="sd-btn lg green">Window</button>
      <button class="sd-icon red sm"><i class="material-icons">close</i></button>
      <button class="sd-icon red circle"><i class="material-icons">mouse</i></button>
      <button class="sd-icon blue"><i class="material-icons">casino</i></button>
      <button class="sd-icon blue sm circle"><i class="material-icons">cloud</i></button>
      <button class="sd-btn lg">Clear</button>
    </div>
  `);