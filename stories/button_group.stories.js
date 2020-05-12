import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Button Group', () => html`
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

    <button class="sd-btn-mix black title"><i class="material-icons green">touch_app</i>Button Group</button>
    <h2 class="sd-btn black">CSS .class Selectors</h2><br>
    <h2 class="sd-btn black sm"><span class="light">sd-btn-group</span></h2>
    <div class="sd-btn-group">
      <button class="sd-btn-mix blue-mate"><i class="material-icons">favorite</i>Follow</button>
      <button class="sd-btn-mix blue-mate"><i class="material-icons">face</i>Profile</button>
      <button class="sd-btn-mixr blue-mate">Code<i class="material-icons">code</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-btn">Notes</button>
      <button class="sd-btn">Media</button>
      <button class="sd-btn-mix"><i class="material-icons">face</i>Profile</button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon red"><i class="material-icons">eco</i></button>
      <button class="sd-btn red-mate">Home</button>
      <button class="sd-btn red-mate">Profile</button>
      <button class="sd-btn-mixr red-mate">Add<i class="material-icons">add</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon purple"><i class="material-icons">eco</i></button>
      <button class="sd-btn black">Messages</button>
      <button class="sd-btn black">Contacts</button>
      <button class="sd-btn-mixr black">Settings<i class="material-icons">settings</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon blue"><i class="material-icons">local_phone</i></button>
      <button class="sd-icon blue"><i class="material-icons">mail</i></button>
      <button class="sd-icon blue"><i class="material-icons">near_me</i></button>
      <button class="sd-icon blue"><i class="material-icons">bluetooth</i></button>
      <button class="sd-icon blue"><i class="material-icons">wifi</i></button>
      <button class="sd-icon blue"><i class="material-icons">battery_charging_full</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon red"><i class="material-icons">fiber_manual_record</i></button>
      <button class="sd-icon green"><i class="material-icons">skip_previous</i></button>
      <button class="sd-icon green"><i class="material-icons">fast_rewind</i></button>
      <button class="sd-icon green"><i class="material-icons">play_arrow</i></button>
      <button class="sd-icon green"><i class="material-icons">fast_forward</i></button>
      <button class="sd-icon green"><i class="material-icons">skip_next</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon black"><i class="material-icons">add_a_photo</i></button>
      <button class="sd-icon black"><i class="material-icons">add_photo_alternate</i></button>
      <button class="sd-icon black"><i class="material-icons">crop</i></button>
      <button class="sd-icon black"><i class="material-icons">palette</i></button>
      <button class="sd-icon black"><i class="material-icons">brightness_5</i></button>
      <button class="sd-icon black"><i class="material-icons">brush</i></button>
      <button class="sd-icon black"><i class="material-icons">tonality</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon black"><i class="material-icons green">thumb_up_alt</i></button>
      <button class="sd-icon black"><i class="material-icons red">thumb_down_alt</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon black"><i class="material-icons blue">favorite_border</i></button>
      <button class="sd-icon black"><i class="material-icons yellow">grade</i></button>
      <button class="sd-icon black"><i class="material-icons green">near_me</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon black"><i class="material-icons green">add</i></button>
      <button class="sd-icon black"><i class="material-icons red">remove</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon green"><i class="material-icons">add</i></button>
      <button class="sd-icon red"><i class="material-icons">remove</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-btn green">Accept</button>
      <button class="sd-btn red">Decline</button>
    </div>
    <br>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-group"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon purple"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>add<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-mix black"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>home<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span>Home<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn black"</span><span class="gre">></span><span class="gre"></span>Profile<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn black"</span><span class="gre">></span><span class="gre"></span>Info<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn black"</span><span class="gre">></span><span class="gre"></span>Contact<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
    <br>
    <span style="color: white;">Pagination example</span>
    <br><br>
    <div class="sd-btn-group">
      <button class="sd-icon sm green"><i class="material-icons">keyboard_arrow_left</i></button>
      <button class="sd-btn green">1</button>
      <button class="sd-btn green">2</button>
      <button class="sd-btn green">3</button>
      <button class="sd-btn green">4</button>
      <button class="sd-btn green">5</button>
      <button class="sd-btn green">6</button>
      <button class="sd-btn green">7</button>
      <button class="sd-icon sm green"><i class="material-icons">keyboard_arrow_right</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon sm blue"><i class="material-icons">keyboard_arrow_left</i></button>
      <button class="sd-btn blue">1</button>
      <button class="sd-btn blue">2</button>
      <button class="sd-btn blue">3</button>
      <button class="sd-btn blue">4</button>
      <button class="sd-btn blue">5</button>
      <button class="sd-icon sm blue"><i class="material-icons">keyboard_arrow_right</i></button>
    </div>
    <br>
    <div class="sd-btn-group">
      <button class="sd-icon sm red-mate"><i class="material-icons">keyboard_arrow_left</i></button>
      <button class="sd-btn sm red-mate">1</button>
      <button class="sd-btn sm red-mate">2</button>
      <button class="sd-btn sm red-mate">3</button>
      <button class="sd-btn sm red-mate">4</button>
      <button class="sd-btn sm red-mate">5</button>
      <button class="sd-icon sm red-mate"><i class="material-icons">keyboard_arrow_right</i></button>
    </div>
    <p class="package">
    <span class="gre"><</span><span class="blu">div </span><span class="light-txt">class</span>=<span class="ora">"sd-btn-group"</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon sm blue"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_left<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>1<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>2<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>3<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>4<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-btn blue"</span><span class="gre">></span><span class="gre"></span>5<span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
      <span class="gre"><</span><span class="blu">button </span><span class="light-txt">class</span>=<span class="ora">"sd-icon sm blue"</span><span class="gre">></span><span class="gre"></span><span class="gre"><</span><span class="blu">i </span><span class="light-txt">class</span>=<span class="ora">"material-icons"</span><span class="gre">></span>keyboard_arrow_right<span class="gre">${`</`}</span><span class="blu">i</span><span class="gre">></span><span class="gre">${`</`}</span><span class="blu">button</span><span class="gre">></span>
    <span class="gre"><</span><span class="gre">/</span><span class="blu">div</span><span class="gre">></span>
    </p>
  `);
