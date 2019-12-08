import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import { storyCommonStyles } from '../.storybook/common-styles';
import '../spinner';

storiesOf('Seed Catalog', module)
  .add('Spinner', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            * {
                font-family: 'Ubuntu', sans-serif;
            }

            .bluex, .redx, .greenx {
                visibility: hidden;
            }
        </style>
        
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Spinner</button>
        <br><br>
        <button class="sd-btn blue" @click="${() => { document.querySelector('.bluex').style.visibility = 'visible'; }}">Show spinner</button>
        <button class="sd-btn red" @click="${() => { document.querySelector('.redx').style.visibility = 'visible'; }}">Show spinner</button>
        <button class="sd-btn green" @click="${() => { document.querySelector('.greenx').style.visibility = 'visible'; }}">Show spinner</button>
        <seed-spinner class="bluex" color="#2dabb4" @click="${() => { document.querySelector('.bluex').style.visibility = 'hidden'; }}"></seed-spinner>
        <seed-spinner class="redx" color="#ea442d" @click="${() => { document.querySelector('.redx').style.visibility = 'hidden'; }}"></seed-spinner>
        <seed-spinner class="greenx" background="rgba(0, 0, 0, 0.2)" color="rgb(38, 207, 58)" @click="${() => { document.querySelector('.greenx').style.visibility = 'hidden'; }}"></seed-spinner>
        <p class="tags-container"><span><span class="light-txt">${`<seed-spinner></seed-spinner>`}</span></span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="#2dabb4"`}</span>${`></seed-spinner>`}</span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="rgb(255,255,255)"`}</span>${`></seed-spinner>`}</span>
        </p>
    `);
