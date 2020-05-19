import { css } from 'lit-element';
import { materialIcons, googleFont } from './fonts.js';

const seedColors = css`
  :host, html {
    --seed-color-white: white;
    --seed-color-white-focus: rgba(255, 255, 255, .2);
    --seed-color-white-hover: #dedede;

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

    --seed-color-blue-mate: #3f76b6;
    --seed-color-blue-mate-focus: #2dabb445;
    --seed-color-blue-mate-hover: rgb(53, 98, 149);
  }
`;

const dropDown = css`
  .dropdown-links > a {
    color: #483f3f;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    padding: 8px;
    padding-left: 20px;
    padding-right: 50px;
  }

  .dropdown-links > a:hover {
    background-color: #f9f9f9;
  }

  .dropdown-links > a > i{
    margin-right: 15px;
  }
`;

const seedInput = css`
  .sd-input-submit, .sd-input-icon {
    width: fit-content;
    display: flex;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .sd-input-submit > input[type=text],
  .sd-input-icon > input[type=text] {
    padding: 0 10px;
  }

  .sd-input-submit > input,
  .sd-input-submit > button,
  .sd-input-icon > div {
    border: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .sd-input-icon > div {
    cursor: auto;
  }

  .sd-input-icon:hover > div.sd-icon {
    outline: 0px solid transparent;
  }

  .sd-input-icon:hover > div.sd-icon.red { background-color: var(--seed-color-red); }
  .sd-input-icon:hover > div.sd-icon.green { background-color: var(--seed-color-green); }
  .sd-input-icon:hover > div.sd-icon.blue { background-color: var(--seed-color-blue); }
  .sd-input-icon:hover > div.sd-icon.yellow { background-color: var(--seed-color-yellow); }
  .sd-input-icon:hover > div.sd-icon.black { background-color: var(--seed-color-black); }
  .sd-input-icon:hover > div.sd-icon.purple { background-color: var(--seed-color-purple); }
  .sd-input-icon:hover > div.sd-icon.orange { background-color: var(--seed-color-orange); }
  .sd-input-icon:hover > div.sd-icon.green-mate { background-color: var(--seed-color-green-mate); }
  .sd-input-icon:hover > div.sd-icon.blue-mate { background-color: var(--seed-color-blue-mate); }
  .sd-input-icon:hover > div.sd-icon.red-mate { background-color: var(--seed-color-red-mate); }

  .sd-input-case > i {
    margin: 0 5px;
  }
`;

export const seedStyle = css`
  ${googleFont}
  ${materialIcons}
  ${dropDown}
  ${seedColors}
  ${seedInput}
  
  .sd-btn, .sd-icon, .sd-btn-mix, .sd-btn-mixr {
    font-family: 'Ubuntu', sans-serif;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    width: min-content; /*fit-content*/
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    background-color: var(--seed-color-white);
    transition: background-color .1s;
    text-decoration: none;
    cursor: pointer;
  }

  /* Button Group Class */
  .sd-btn-group {
    display: flex;
    width: fit-content;
  }

  .sd-btn-group > .sd-btn,
  .sd-btn-group > .sd-btn-mix,
  .sd-btn-group > .sd-btn-mixr,
  .sd-btn-group > .sd-icon {
    margin: 0;
    border-radius: 0;
  }

  .sd-btn-group > .sd-btn:first-child,
  .sd-btn-group > .sd-btn-mix:first-child,
  .sd-btn-group > .sd-btn-mixr:first-child,
  .sd-btn-group > .sd-icon:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
  }

  .sd-btn-group > .sd-btn:last-child,
  .sd-btn-group > .sd-btn-mix:last-child,
  .sd-btn-group > .sd-btn-mixr:last-child,
  .sd-btn-group > .sd-icon:last-child {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  
  /* sd-btn [class="sd-btn"] */
  .sd-btn-mix, .sd-btn-mixr {
    padding: .2rem .75rem;
    vertical-align: baseline;
  }

  /*** ICON ***/
  .sd-icon {
    display: inline-block;
    font-size: 1rem;
    padding: .4rem .6rem;
    line-height: 1;
  }

  button:focus, button:active { outline: 4px solid var(--seed-color-white-focus);}
  button:hover, button:hover:enabled { background-color: var(--seed-color-white-hover); }

  .sd-btn:disabled, .sd-btn-mix:disabled, .sd-btn-mixr:disabled, .sd-icon:disabled { opacity: .8; }

  .clear:hover, .clear.red:active, .clear:hover:enabled {
    background-color: unset;
  }

  button:disabled > i {
    pointer-events: none;
  }

  /*** WHITE ***/
  .white { color: white; }

  /*** RED ***/
  .red { background-color: var(--seed-color-red); color: var(--seed-color-white); }
  .red:focus, .red:active, .clear:focus > .red, .clear:active > .red { outline: 4px solid var(--seed-color-red-focus); }
  .red:hover, .red:hover:enabled { background-color: var(--seed-color-red-hover); }
  .red:hover:disabled { background-color: var(--seed-color-red); }

  /*** GREEN ***/
  .green { background-color: var(--seed-color-green); color: var(--seed-color-white); }
  .green:focus, .green:active, .clear:focus .green, .clear:active .green { outline: 4px solid var(--seed-color-green-focus); }
  .green:hover, .green:hover:enabled { background-color: var(--seed-color-green-hover); }
  .green:hover:disabled { background-color: var(--seed-color-green); }

  /*** BLUE ***/
  .blue { background-color: var(--seed-color-blue); color: var(--seed-color-white); }
  .blue:focus, .blue:active, .clear:focus .blue, .clear:active .blue { outline: 4px solid var(--seed-color-blue-focus); }
  .blue:hover, .blue:hover:enabled { background-color: var(--seed-color-blue-hover); }
  .blue:hover:disabled { background-color: var(--seed-color-blue); }

  /*** YELLOW ***/
  .yellow { background-color: var(--seed-color-yellow); color: var(--seed-color-black-hover);}
  .yellow:focus, .yellow:active, .clear:focus .yellow, .clear:active .yellow { outline: 4px solid var(--seed-color-yellow-focus); }
  .yellow:hover, .yellow:hover:enabled { background-color: var(--seed-color-yellow-hover); }
  .yellow:hover:disabled { background-color: var(--seed-color-yellow); }

  /*** PURPLE ***/
  .purple { background-color: var(--seed-color-purple); color: var(--seed-color-white); }
  .purple:focus, .purple:active, .clear:focus .purple, .clear:active .purple { outline: 4px solid var(--seed-color-purple-focus); }
  .purple:hover, .purple:hover:enabled { background-color: var(--seed-color-purple-hover); }
  .purple:hover:disabled { background-color: var(--seed-color-purple); }

  /*** BLACK ***/
  .black { background-color: var(--seed-color-black); color: var(--seed-color-white); }
  .black:focus, .black:active, .clear:focus .black, .clear:active .black { outline: 4px solid var(--seed-color-black-focus); }
  .black:hover, .black:hover:enabled { background-color: var(--seed-color-black-hover); }
  .black:hover:disabled { background-color: var(--seed-color-black); }

  /*** ORANGE ***/
  .orange { background-color: var(--seed-color-orange); color: var(--seed-color-white); }
  .orange:focus, .orange:active, .clear:focus .orange, .clear:active .orange { outline: 4px solid var(--seed-color-orange-focus); }
  .orange:hover, .orange:hover:enabled { background-color: var(--seed-color-orange-hover); }
  .orange:hover:disabled { background-color: var(--seed-color-orange); }

  /*** GREEN MATE ***/
  .green-mate { background-color: var(--seed-color-green-mate); color: var(--seed-color-white); }
  .green-mate:focus, .green-mate:active, .clear:focus .green-mate, .clear:active .green-mate { outline: 4px solid var(--seed-color-green-mate-focus); }
  .green-mate:hover, .green-mate:hover:enabled { background-color: var(--seed-color-green-mate-hover); }
  .green-mate:hover:disabled { background-color: var(--seed-color-green-mate); }

  /*** RED MATE ***/
  .red-mate { background-color: var(--seed-color-red-mate); color: var(--seed-color-white); }
  .red-mate:focus, .red-mate:active, .clear:focus .red-mate, .clear:active .red-mate { outline: 4px solid var(--seed-color-red-mate-focus); }
  .red-mate:hover, .red-mate:hover:enabled { background-color: var(--seed-color-red-mate-hover); }
  .red-mate:hover:disabled { background-color: var(--seed-color-red-mate); }

  /*** BLUE MATE ***/
  .blue-mate { background-color: var(--seed-color-blue-mate); color: var(--seed-color-white); }
  .blue-mate:focus, .blue-mate:active, .clear:focus .blue-mate, .clear:active .blue-mate { outline: 4px solid var(--seed-color-blue-mate-focus); }
  .blue-mate:hover, .blue-mate:hover:enabled { background-color: var(--seed-color-blue-mate-hover); }
  .blue-mate:hover:disabled { background-color: var(--seed-color-blue-mate); }


  /*** SIZES ***/
  .sm { font-size: .8rem; padding: .180rem .30rem; }
  .lg { font-size: 1.2rem; padding: .400rem .90rem; }


  /*** ICON ***/
  .sm > i { font-size: .9rem; font-weight: bold; }
  .lg > i { font-size: 23px; }

  .sd-icon.lg {
    padding: .1rem .4rem;
  }

  .sd-icon.lg > i{
    font-size: 35px;
    padding: 0;
  }

  /*** CIRCLE ***/
  .circle {
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 100%;
    padding: 0;
  }

  .circle.sm {
    width: 1.5rem;
    height: 1.5rem;
  }

  .circle.lg {
    width: 3rem;
    height: 3rem;
  }

  .circle.lg > .material-icons{
    font-size: 1.8rem;
  }

  .circle.sm > i {
    font-size: 13px;
  }

  /*** MIX ***/
  .sd-btn-mix > i, .sd-btn-mixr > i {
    font-size: 20px;
  }

  .sd-btn-mix.sm > i, .sd-btn-mixr.sm > i {
    font-size: 15px;
  }

  .sd-btn-mix > * { margin-right: 5px; }
  .sd-btn-mixr > * { margin-left: 5px; }

  /*** ICONS COLORS ***/
  i.red { color: var(--seed-color-red); }
  i.green { color: var(--seed-color-green); }
  i.blue { color: var(--seed-color-blue); }
  i.yellow { color: var(--seed-color-yellow); }
  i.purple { color: var(--seed-color-purple); }
  i.black { color: var(--seed-color-black); }
  i.orange { color: var(--seed-color-orange); }
  i.green-mate { color: var(--seed-color-green-mate); }
  i.red-mate { color: var(--seed-color-red-mate); }
  i.blue-mate { color: var(--seed-color-blue-mate); }
  
  i.lg { font-size: 2.5rem; padding: 0; }
  i.sm { font-size: 1rem; padding: 0; }

  button > .material-icons:active { outline: none; }

  .yellow > i { color: var(--seed-color-black-hover); }

  .material-icons:focus, .material-icons:active { outline: 0px; }

  input[type=submit] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* sd-btn clear color */
  .sd-icon.clear {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
  }

  .sd-btn.clear, .sd-btn.clear:hover,
  .sd-btn-mix.clear, .sd-btn-mix.clear:hover,
  .sd-btn-mixr.clear, .sd-btn-mixr.clear:hover {
    background-color: transparent;
  }

  .sd-btn.clear.red, .sd-btn-mix.clear.red, .sd-btn-mixr.clear.red { color: var(--seed-color-red); border: 2px solid var(--seed-color-red); }
  .sd-btn.clear.blue, .sd-btn-mix.clear.blue, .sd-btn-mixr.clear.blue { color: var(--seed-color-blue); border: 2px solid var(--seed-color-blue); }
  .sd-btn.clear.green, .sd-btn-mix.clear.green, .sd-btn-mixr.clear.green { color: var(--seed-color-green); border: 2px solid var(--seed-color-green); }
  .sd-btn.clear.yellow, .sd-btn-mix.clear.yellow, .sd-btn-mixr.clear.yellow { color: var(--seed-color-yellow); border: 2px solid var(--seed-color-yellow); }
  .sd-btn.clear.purple, .sd-btn-mix.clear.purple, .sd-btn-mixr.clear.purple { color: var(--seed-color-purple); border: 2px solid var(--seed-color-purple); }
  .sd-btn.clear.orange, .sd-btn-mix.clear.orange, .sd-btn-mixr.clear.orange { color: var(--seed-color-orange); border: 2px solid var(--seed-color-orange); }
  .sd-btn.clear.black, .sd-btn-mix.clear.black, .sd-btn-mixr.clear.black { color: var(--seed-color-black); border: 2px solid var(--seed-color-black); }
  .sd-btn.clear.red-mate, .sd-btn-mix.clear.red-mate, .sd-btn-mixr.clear.red-mate { color: var(--seed-color-red-mate); border: 2px solid var(--seed-color-red-mate); }
  .sd-btn.clear.green-mate, .sd-btn-mix.clear.green-mate, .sd-btn-mixr.clear.green-mate { color: var(--seed-color-green-mate); border: 2px solid var(--seed-color-green-mate); }
  .sd-btn.clear.blue-mate, .sd-btn-mix.clear.blue-mate, .sd-btn-mixr.clear.blue-mate { color: var(--seed-color-blue-mate); border: 2px solid var(--seed-color-blue-mate); }

  .sd-btn.clear.yellow > i, .sd-btn-mix.clear.yellow > i, .sd-btn-mixr.clear.yellow > i { color: var(--seed-color-yellow); }
`;
