import { css } from 'lit-element';
import { materialIcons, googleFont } from './fonts.js';

export const seedButtonStyle = css`

    ${googleFont}
    ${materialIcons}

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
    
    /* sd-btn [class="sd-btn"] */
    .sd-btn, .sd-icon, .sd-btn-mix, .sd-btn-mixr {
        font-family: 'Ubuntu', sans-serif;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
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
        transition: background-color .1s;
        text-decoration: none;
        cursor: pointer;
    }
    
    /* sd-btn [class="sd-btn"] */
    .sd-btn-mix, .sd-btn-mixr {
      padding: .2rem .75rem;
      vertical-align: baseline;
    }

    .sd-icon {
      display: inline-block;
      font-size: 1rem;
      padding: .4rem .6rem;
      line-height: 1;
    }

    .sd-btn-mix > * { margin-right: 7px; }
    .sd-btn-mixr > * { margin-left: 7px; }

    .sd-btn:focus { outline: 4px solid #ffffff40; }
    .sd-btn:disabled, .sd-btn-mix:disabled { opacity: .8; }
    .sd-btn:hover:enabled { background-color: #dedede; }

    /*** RED ***/
    .red { background-color: var(--seed-color-red); color: white; }
    .red:focus { outline: 4px solid var(--seed-color-red-focus); }
    .red:hover:enabled { background-color: var(--seed-color-red-hover); }

    /*** GREEN ***/
    .green { background-color: var(--seed-color-green); color: white; }
    .green:focus { outline: 4px solid var(--seed-color-green-focus); }
    .green:hover:enabled { background-color: var(--seed-color-green-hover); }

    /*** BLUE ***/
    .blue { background-color: var(--seed-color-blue); color: white; }
    .blue:focus { outline: 4px solid var(--seed-color-blue-focus); }
    .blue:hover:enabled { background-color: var(--seed-color-blue-hover); }

    /*** YELLOW ***/
    .yellow { background-color: var(--seed-color-yellow); color: #434343;}
    .yellow:focus { outline: 4px solid var(--seed-color-yellow); }
    .yellow:hover:enabled { background-color: var(--seed-color-yellow-hover); }

    /*** PURPLE ***/
    .purple { background-color: var(--seed-color-purple); color: white; }
    .purple:focus { outline: 4px solid var(--seed-color-purple-focus); }
    .purple:hover:enabled { background-color: var(--seed-color-purple-hover); }

    /*** BLACK ***/
    .black { background-color: var(--seed-color-black); color: white; }
    .black:focus { outline: 4px solid var(--seed-color-black-focus); }
    .black:hover:enabled { background-color: var(--seed-color-black-hover); }

    /*** ORANGE ***/
    .orange { background-color: var(--seed-color-orange); color: white; }
    .orange:focus { outline: 4px solid var(--seed-color-orange-focus); }
    .orange:hover:enabled { background-color: var(--seed-color-orange-hover); }

    /*** GREEN MATE ***/
    .green-mate { background-color: var(--seed-color-green-mate); color: white; }
    .green-mate:focus { outline: 4px solid var(--seed-color-green-mate-focus); }
    .green-mate:hover:enabled { background-color: var(--seed-color-green-mate-hover); }

    /*** RED MATE ***/
    .red-mate { background-color: var(--seed-color-red-mate); color: white; }
    .red-mate:focus { outline: 4px solid var(--seed-color-red-mate-focus); }
    .red-mate:hover:enabled { background-color: var(--seed-color-red-mate-hover); }

    /*** BLUE MATE ***/
    .blue-mate { background-color: var(--seed-color-blue-mate); color: white; }
    .blue-mate:focus { outline: 4px solid var(--seed-color-blue-mate-focus); }
    .blue-mate:hover:enabled { background-color: var(--seed-color-blue-mate-hover); }

    .sm { font-size: .8rem; padding: .180rem .30rem; }
    .lg { font-size: 1.2rem; padding: .400rem .90rem; }

    .sm > i { font-size: .9rem; font-weight: bold; }
    .lg > i { font-size: 23px; }

    i:only-child {
      color: white !important;
    }

    .sd-icon.lg {
      padding: .1rem .4rem;
    }

    .sd-icon.lg > i{
      font-size: 35px;
      padding: 0;
    }

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
    
    .sd-btn-mix > i, .sd-btn-mixr > i {
      font-size: 20px;
    }

    .sd-btn-mix.sm > i, .sd-btn-mixr.sm > i {
      font-size: 15px;
      margin-right: 3px;
    }

    i.red { background-color: unset; color: var(--seed-color-red); }
    i.green { background-color: unset; color: var(--seed-color-green); }
    i.blue { background-color: unset; color: var(--seed-color-blue); }
    i.yellow { background-color: unset; color: var(--seed-color-yellow); }
    i.purple { background-color: unset; color: var(--seed-color-purple); }
    i.black { background-color: unset; color: var(--seed-color-black); }
    i.orange { background-color: unset; color: var(--seed-color-orange); }
    i.green-mate { background-color: unset; color: var(--seed-color-green-mate); }
    i.red-mate { background-color: unset; color: var(--seed-color-red-mate); }
    i.blue-mate { background-color: unset; color: var(--seed-color-blue-mate); }
    
    i.lg { font-size: 2.5rem; padding: 0; }
    i.sm { font-size: 1rem; padding: 0; }
`;
