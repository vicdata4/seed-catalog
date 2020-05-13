import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Button Icon', () => html`
    <style>
      ${seedStyle}
      ${storyCommonStyles}
      ${cssTemplateColors}

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

      p > span {
        margin: 10px;
        margin-left: 0;
        margin-right: 0;
      }

      .title-example {
          color: white;
      }
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons green">touch_app</i>Button Icon</button>
    <h2 class="sd-btn black">CSS .class Selectors</h2><br>
    <h2 class="sd-btn black sm"><span class="light">sd-icon</span></h2><button class="sd-icon yellow"><i class="material-icons">create</i></button><button class="sd-icon green"><i class="material-icons">call</i></button><button class="sd-icon red"><i class="material-icons">home</i></button><button class="sd-icon blue"><i class="material-icons">lock</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon red-mate"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-icon circle</span></h2><button class="sd-icon circle blue"><i class="material-icons">face</i></button><button class="sd-icon circle red"><i class="material-icons">star</i></button><button class="sd-icon circle green"><i class="material-icons">lock</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon circle black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon circle red-mate"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-icon clear</span></h2>
    <button class="sd-icon clear"><i class="material-icons white">4k</i></button>
    <button class="sd-icon clear"><i class="material-icons red">favorite</i></button>
    <button class="sd-icon clear"><i class="material-icons blue">grade</i></button>
    <button class="sd-icon clear"><i class="material-icons green">thumb_up</i></button>
    <button class="sd-icon clear"><i class="material-icons purple">face</i></button>
    <button class="sd-icon clear"><i class="material-icons red-mate">add</i></button>
    <button class="sd-icon clear"><i class="material-icons yellow">cast</i></button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon clear"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons white"</span><span class="gre">></span>4k<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon clear"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">material-icons color</span></h2><i class="material-icons yellow">face</i><i class="material-icons blue">star</i></button><i class="material-icons green lg">lock</i><i class="material-icons red lg">flight</i><i class="material-icons yellow lg">cloud</i><i class="material-icons blue sm">face</i><i class="material-icons green sm">home</i><i class="material-icons white sm">folder</i><i class="material-icons black sm">folder</i>
    <p class="package">
    <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons blue"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">combine colors</span></h2><button class="sd-icon"><i class="material-icons red-mate">create</i></button><button class="sd-icon black"><i class="material-icons blue">invert_colors</i></button><button class="sd-icon"><i class="material-icons blue-mate">home</i></button><button class="sd-icon circle"><i class="material-icons red-mate">volume_up</i></button><button class="sd-icon circle"><i class="material-icons blue-mate">pause</i></button><button class="sd-icon circle red-mate"><i class="material-icons">play_arrow</i></button><br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons green-mate"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons red-mate"</span><span class="gre">></span>face<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>

    <h2 class="sd-btn black sm"><span class="light">disabled attribute</span></h2>
    <button class="sd-icon red" disabled><i class="material-icons">eco</i></button>
    <button class="sd-icon blue" disabled><i class="material-icons">work</i></button>
    <button class="sd-icon green" disabled><i class="material-icons">videocam</i></button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon red" </span><span class="light-txt">disabled</span><span class="gre">></span>example<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <h4 class="title-example">Combinations</h4>
    <div class="container" style="background-color: #292929;">
      <button class="sd-icon lg red"><i class="material-icons">phone</i></button>
      <button class="sd-icon circle lg red"><i class="material-icons">phone</i></button>
      <button class="sd-icon clear lg"><i class="material-icons red">phone</i></button>
      <br><br>
      <button class="sd-icon red"><i class="material-icons">phone</i></button>
      <button class="sd-icon circle red"><i class="material-icons">phone</i></button>
      <button class="sd-icon clear"><i class="material-icons red">phone</i></button>
      <br><br>
      <button class="sd-icon sm red"><i class="material-icons">phone</i></button>
      <button class="sd-icon circle sm red"><i class="material-icons">phone</i></button>
      <button class="sd-icon clear sm"><i class="material-icons red">phone</i></button>
      <br><br>
      <button class="sd-icon lg blue"><i class="material-icons">home</i></button>
      <button class="sd-icon circle lg blue"><i class="material-icons">home</i></button>
      <button class="sd-icon clear lg"><i class="material-icons blue">home</i></button>
      <br><br>
      <button class="sd-icon blue"><i class="material-icons">home</i></button>
      <button class="sd-icon circle blue"><i class="material-icons">home</i></button>
      <button class="sd-icon clear"><i class="material-icons blue">home</i></button>
      <br><br>
      <button class="sd-icon sm blue"><i class="material-icons">home</i></button>
      <button class="sd-icon circle sm blue"><i class="material-icons">home</i></button>
      <button class="sd-icon clear sm"><i class="material-icons blue">home</i></button>
      <br><br>
      <button class="sd-icon lg green"><i class="material-icons">eco</i></button>
      <button class="sd-icon circle lg green"><i class="material-icons">eco</i></button>
      <button class="sd-icon clear lg"><i class="material-icons green">eco</i></button>
      <br><br>
      <button class="sd-icon green"><i class="material-icons">eco</i></button>
      <button class="sd-icon circle green"><i class="material-icons">eco</i></button>
      <button class="sd-icon clear"><i class="material-icons green">eco</i></button>
      <br><br>
      <button class="sd-icon sm green"><i class="material-icons">eco</i></button>
      <button class="sd-icon circle sm green"><i class="material-icons">eco</i></button>
      <button class="sd-icon clear sm"><i class="material-icons green">eco</i></button>
    </div>
  `);
