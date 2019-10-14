import { css } from 'lit-element';
import { materialIcons, googleFont } from './fonts.js';

export const seedButtonStyle = css`
    ${googleFont}
    ${materialIcons}

    /* sd-btn [class="sd-btn"] */
    .sd-btn, .sd-icon, .sd-btn-mix, .sd-btn-mixr {
        font-family: 'Heebo', sans-serif;
        background-color: white;
        font-weight: bolder;
        font-size: 1rem;
        font-weight: lighter;
        width: fit-content;
        width: -moz-fit-content;
        margin: 2px;
        padding: .4rem 1rem;
        color: #3b3b3b;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        transition: background-color .1s;
        line-height: initial;
    }
    
    /* sd-btn [class="sd-btn"] */
    .sd-btn-mix {
      vertical-align: baseline;
    }

    .sd-icon {
      font-size: 1rem;
      padding: .4rem .6rem;
      line-height: 1;
      vertical-align: bottom;
    }

    

    .sd-btn-mix > * { margin-right: 7px; }
    .sd-btn-mixr > * { margin-left: 7px; }

    .sd-btn:focus { outline: 4px solid #ffffff40; }
    .sd-btn:disabled, .sd-btn-mix:disabled { opacity: .8; }
    .sd-btn:hover:enabled { background-color: #dedede; }

    /*** RED ***/
    .red { background-color: #de3d4c; color: white; }
    .red:focus { outline: 4px solid #ff00184d; }
    .red:hover:enabled { background-color: #bb3440; }

    /*** GREEN ***/
    .green { background-color: #22ac41; color: white; }
    .green:focus { outline: 4px solid #7fc72a45; }
    .green:hover:enabled { background-color: #199936; }

    /*** BLUE ***/
    .blue { background-color: #2dabb4; color: white; }
    .blue:focus { outline: 4px solid #2dabb445; }
    .blue:hover:enabled { background-color: #239aa3; }

    /*** YELLOW ***/
    .yellow { background-color: #e6af0e; color: #434343;}
    .yellow:focus { outline: 4px solid #c89a0c3d; }
    .yellow:hover:enabled { background-color: #d5a927; }

    /*** PURPLE ***/
    .purple { background-color: #903e8d; color: white; }
    .purple:focus { outline: 4px solid #903e8d5e; }
    .purple:hover:enabled { background-color: #663564; }

    /*** BLACK ***/
    .black { background-color: #2f2d2d; color: white; }
    .black:focus { outline: 4px solid #43434387; }
    .black:hover:enabled { background-color: #434343; }

    /*** ORANGE ***/
    .orange { background-color: #d58309; color: white;}
    .orange:focus { outline: 4px solid #e09e2057; }
    .orange:hover:enabled { background-color: #b46e06;}

    /*** GREEN MATE ***/
    .green-mate { background-color: #1C8281; color: white;}
    .green-mate:focus { outline: 4px solid #2dabb445; }
    .green-mate:hover:enabled { background-color: rgb(51, 121, 120);}

    /*** RED MATE ***/
    .red-mate { background-color: #bf4545; color: white;}
    .red-mate:focus { outline: 4px solid #ff00184d; }
    .red-mate:hover:enabled { background-color: rgb(176, 63, 63);}

    /*** BLUE MATE ***/
    .blue-mate { background-color: rgb(63, 118, 182); color: white;}
    .blue-mate:focus { outline: 4px solid #2dabb445; }
    .blue-mate:hover:enabled { background-color: rgb(53, 98, 149);}

    .sd-btn.lg > .fa {
        vertical-align: baseline;
    }

    .sm { font-size: .8rem; padding: .180rem .30rem; }
    .lg { font-size: 1.2rem; padding: .400rem .90rem; }

    .sm > i { font-size: .9rem; font-weight: bold; }
    .lg > i { font-size: 23px; }

    i:only-child {
      color: white !important;
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
      vertical-align: sub;
    }

    .circle.sm > i {
        font-size: 13px;
    }

    .sd-icon > i {
        vertical-align: sub;
    }

    .sd-btn-mix > i, .sd-btn-mixr > i {
      font-size: 20px;
    }

    .sd-btn-mix.sm > i, .sd-btn-mixr.sm > i {
      font-size: 15px;
      margin-right: 3px;
      }
`;
