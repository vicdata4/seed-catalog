import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Input Field', () => html`
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
    </style>

    <button class="sd-btn-mix black title"><i class="material-icons green">touch_app</i>Button</button>
    <h2 class="sd-btn black">CSS .class Selectors</h2><br>
    <h2 class="sd-btn black sm"><span class="light">sd-input-submit</span></h2>
    <br>

    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn red"</span> <span class="light-txt">value</span>=<span class="ora">"Buscar"</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>

    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Buscar" class="sd-btn lg red">
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Buscar" class="sd-btn red">
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Buscar" class="sd-btn sm red">
    </div>

    <h2 class="sd-btn black sm"><span class="light">sd-input-icon</span></h2>
    <br>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>search<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
      <span class="gre"><</span><span class="gre">/</span><span class="blu">button</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>

    <div class="sd-input-icon">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon lg blue">
          <i class="material-icons">search</i>
        </button>
    </div>
    <br>
    <div class="sd-input-icon">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon blue">
          <i class="material-icons">search</i>
        </button>
    </div>
    <br>
    <div class="sd-input-icon">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon sm blue">
          <i class="material-icons">search</i>
        </button>
    </div>
  `);
