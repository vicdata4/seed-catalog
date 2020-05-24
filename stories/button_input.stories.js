import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Button Input', () => html`
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
    <br><br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Search" class="sd-btn red">
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Search" class="sd-btn blue">
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Search" class="sd-btn green">
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <input type="submit" value="Search" class="sd-btn clear blue">
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn red"</span> <span class="light-txt">value</span>=<span class="ora">"Buscar"</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn sm green"</span> <span class="light-txt">value</span>=<span class="ora">"Buscar"</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>

    <div class="background-light">
      <div class="sd-input-submit">
          <input type="text" style="border: 1px solid grey;" placeholder="write some text..">
          <input type="submit" value="Search" class="sd-btn green">
      </div>
      <br>
      <div class="sd-input-submit">
          <input type="text" style="border: 1px solid grey;" placeholder="write some text..">
          <input type="submit" value="Search" class="sd-btn red">
      </div>
      <br>
      <div class="sd-input-submit">
          <input type="text" style="border: 1px solid grey;" placeholder="write some text..">
          <input type="submit" value="Search" class="sd-btn black">
      </div>
      <br>
      <div class="sd-input-submit">
          <input type="text" style="border: 1px solid grey;" placeholder="write some text..">
          <input type="submit" value="Search" class="sd-btn blue-mate">
      </div>
      <br>
      <div class="sd-input-submit">
          <input type="text" style="border: 1px solid grey; color: var(--seed-color-blue-mate);" placeholder="write some text..">
          <input type="submit" value="Search" class="sd-btn clear blue-mate">
      </div>
    </div>
    <p class="package">
    <span class="gree">// Customize your input styles</span>

    <span class="ora">.custom-input</span> <span>{</span>
      <span class="light-txt">border</span><span>: </span><span>1px </span><span class="reed">solid grey</span><span>;</span>
      <span class="light-txt">color</span><span>: </span><span class="yellou">var</span>(<span class="light-txt">--seed-color-blue-mate</span><span>);</span>
    <span>}</span>

    <span class="ora">.custom-input</span><span class="ora">::placeholder</span> </span><span>{</span>
      <span class="light-txt">color</span><span>: </span><span class="yellou">var</span>(<span class="light-txt">--seed-color-blue-mate</span><span>);</span>  
    <span>}</span>

    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">class</span>=<span class="ora">"custom-input"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn blue-mate"</span> <span class="light-txt">value</span>=<span class="ora">"Buscar"</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>

    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon black">
          <i class="material-icons">search</i>
        </button>
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon red">
          <i class="material-icons">search</i>
        </button>
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-icon blue-mate">
          <i class="material-icons">search</i>
        </button>
    </div>
    <br>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>search<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
      <span class="gre"><</span><span class="gre">/</span><span class="blu">button</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-btn-mix">
          <i class="material-icons">search</i>Search
        </button>
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-btn-mix black">
          <i class="material-icons">search</i>Search
        </button>
    </div>
    <br>
    <div class="sd-input-submit">
        <input type="text" placeholder="write some text..">
        <button type="submit" class="sd-btn-mix green">
          <i class="material-icons">save</i>Save
        </button>
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-submit"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">type</span>=<span class="ora">"submit"</span> <span class="light-txt">class</span>=<span class="ora">"sd-btn-mix blue"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>search<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
        Search
      <span class="gre"><</span><span class="gre">/</span><span class="blu">button</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-input-icon</span></h2>
    <br><br>
    <div class="sd-input-icon">
        <input type="text" placeholder="write some text..">
        <div class="sd-icon red">
          <i class="material-icons">search</i>
        </div>
    </div>
    <br>
    <div class="sd-input-icon">
        <input type="text" placeholder="write some text..">
        <div class="sd-icon blue-mate">
          <i class="material-icons">search</i>
        </div>
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-icon"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-icon blue"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>search<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
      <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
    <h2 class="sd-btn black sm"><span class="light">sd-input-icon left</span></h2>
    <br><br>
    <div class="sd-input-icon left">
      <div class="sd-icon green">
        <i class="material-icons">search</i>
      </div>
      <input type="text" placeholder="write some text..">
    </div>
    <br>
    <div class="sd-input-icon left">
      <div class="sd-icon green">
        <i class="material-icons">lock</i>
      </div>
      <input type="text" placeholder="write some text..">
    </div>
    <br>
    <br>
    <div class="sd-input-icon left">
      <div class="sd-icon green">
        <i class="material-icons">lock</i>
      </div>
      <input type="text" placeholder="password">
      <button type="submit" class="sd-btn green">Save</button>
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-icon left"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-icon blue"</span><span class="gre">></span>
        <span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>lock<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>
      <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"write something.."</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>

    <h2 class="sd-btn black sm"><span class="light">sd-input-label</span></h2>
    <br><br>
    <div class="sd-input-label">
      <div class="sd-btn blue">
        Username
      </div>
      <input type="text" placeholder="password">
    </div>
    <br>
    <div class="sd-input-label">
      <div class="sd-btn blue">
        Password
      </div>
      <input type="password" placeholder="password">
    </div>
    <br>
    <div class="sd-input-label">
      <input type="text" placeholder="password">
      <div class="sd-btn blue">
        Password
      </div>
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-input-label"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span>
        Password
      <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"text"</span> <span class="light-txt">placeholder</span>=<span class="ora">"password"</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
  `);
