import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../packages/styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Style', module)
  .add('Button', () => html`
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
    <h2 class="sd-btn black sm"><span class="light">sd-btn colors</span></h2>
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
    <button class="sd-btn sm">default</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn red"</span><span class="gre">></span><span class="gre"></span>red<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>blue<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn green"</span><span class="gre">></span><span class="gre"></span>green<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn purple"</span><span class="gre">></span><span class="gre"></span>purple<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
  
    
    <span class="comm">// Also you can use ${`<a></a>`} tag and input[type=submit]</span>

    <span class="gre"><</span><span class="blu">a </span><span class="light-txt">href</span>=<span class="ora">"/" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn green-mate"</span><span class="gre">></span><span class="gre"></span>Link tag<span class="gre">${`</`}</span><span class="blu">a</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">input </span><span class="light-txt">type</span>=<span class="ora">"submit" </span><span class="light-txt">value</span>=<span class="ora">"Submit" </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span>
    </p>
    <br>
    <button class="sd-btn red-mate">Profile</button><button class="sd-btn black">Play now</button><button class="sd-btn blue-mate">Forest</button><button class="sd-btn purple">Podcast</button><a href="/" class="sd-btn green-mate">Link tag</a><input type="submit" value="Submit" class="sd-btn orange"><br><br>
    <br><br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn-mix</span></h2>
    <button class="sd-btn-mix red-mate"><i class="material-icons">flight</i>Flight</button>
    <button class="sd-btn-mix green-mate"><i class="material-icons">eco</i>Eco</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix red"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>flight<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Flight<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix blue"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>lock<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Lock<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn-mixr</span></h2>
    <button class="sd-btn-mixr red-mate">Flight<i class="material-icons">flight</i></button>
    <button class="sd-btn-mixr green-mate">Eco<i class="material-icons">eco</i></button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mixr green"</span><span class="gre">></span><span class="gre"></span>Home<span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>home<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mixr green"</span><span class="gre">></span><span class="gre"></span>Eco<span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>eco<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn sm</span></h2>
    <button class="sd-btn blue sm">Favorite</button>
    <button class="sd-btn purple sm">Select</button>
    <button class="sd-btn orange sm">Submit</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn sm blue"</span><span class="gre">></span><span class="gre"></span>Favorite<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn lg</span></h2>
    <button class="sd-btn green-mate lg">Favorite</button>
    <button class="sd-btn red-mate lg">Send</button>
    <button class="sd-btn blue-mate lg">Profile</button>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn lg green"</span><span class="gre">></span><span class="gre"></span>Profile<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn clear color</span></h2>
    <br><br>
    <button class="sd-btn clear red">Submit</button>
    <button class="sd-btn clear blue">Login</button>
    <button class="sd-btn clear green">Send</button>
    <br><br>
    <button class="sd-btn-mix clear blue"><i class="material-icons">flight</i>Flight</button>
    <button class="sd-btn-mixr clear green">Eco<i class="material-icons">eco</i></button>
    <button class="sd-btn-mixr clear orange">Cloud<i class="material-icons">cloud</i></button>
    <button class="sd-btn-mix clear yellow"><i class="material-icons">cloud</i>Location</button>
    <br><br>
    <button class="sd-btn-mix clear sm blue"><i class="material-icons">flight</i>Flight</button>
    <button class="sd-btn-mixr clear sm green">Eco<i class="material-icons">eco</i></button>
    <button class="sd-btn-mixr clear sm orange">Cloud<i class="material-icons">cloud</i></button>
    <button class="sd-btn-mix clear sm yellow"><i class="material-icons">cloud</i>Location</button>
    <br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn clear red"</span><span class="gre">></span>Cancel<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>

    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix clear blue"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>lock<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Lock<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
    <br>
    <h2 class="sd-btn black sm"><span class="light">disabled attribute</span></h2>
    <button class="sd-btn red-mate" disabled>disabled</button>
    <button class="sd-btn green-mate" disabled>disabled</button>
    <button class="sd-btn blue-mate" disabled>disabled</button>
    <button class="sd-btn clear purple" disabled>disabled</button>
    <button class="sd-btn clear green" disabled>disabled</button>
    <button class="sd-btn clear orange" disabled>disabled</button>
    <br>
    <p class="package">
    <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn red" </span><span class="light-txt">disabled</span><span class="gre">></span>example<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    </p>
  `);
