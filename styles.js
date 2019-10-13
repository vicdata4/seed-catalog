import { css } from 'lit-element';
import { materialIcons, googleFont } from './fonts.js';


export const seedButtonStyle = css`
    ${googleFont}
    ${materialIcons}

    .sd-btn, .sd-btn-mix, .sd-btn-mixr {
        font-family: 'Heebo', sans-serif;
        background-color: white;
        font-weight: bolder;
        font-size: 1rem;
        font-weight: lighter;
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

    .sd-btn > i {
        vertical-align: middle;
    }

    .sd-btn-mix > * { margin-right: 7px; }
    .sd-btn-mixr > * { margin-left: 7px; }

    .sd-btn:focus { outline: 4px solid #ffffff40; }
    .sd-btn:disabled { opacity: .8; }
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

    .sd-btn.lg > .fa {
        vertical-align: baseline;
    }

    .sm { font-size: .8rem; padding: .200rem .50rem; }
    .lg { font-size: 1.7rem; padding: .200rem .80rem; }

    .sm > .material-icons { font-size: .9rem; font-weight: bold; }
    .lg > .material-icons { font-size: 2rem; }

    i:only-child {
      color: white !important;
    }

    .circle {
        border-radius: 100%;
        padding: .3rem .3rem;
        width: 2.1rem;
        height: 2.1rem;
    }

    .circle.sm {
        width: 1.7rem;
        height: 1.7rem;
    }

    .circle.lg {
        width: 3rem;
        height: 3rem;
    }

    .circle.lg > .material-icons {
      vertical-align: sub;
    }

    



    
`;
