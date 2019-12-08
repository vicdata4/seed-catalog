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

            .bluex, .redx, .greenx {
                visibility: hidden;
            }

            p > span {
                margin: 10px;
                margin-left: 0;
                margin-right: 0;
            }
        </style>
        
        <button class="sd-btn-mix black title"><i class="material-icons orange">filter_tilt_shift</i>Spinner</button>
        <br><br>
        <button class="sd-btn blue" @click="${() => { document.querySelector('.bluex').style.visibility = 'visible'; }}">Show spinner</button>
        <button class="sd-btn red" @click="${() => { document.querySelector('.redx').style.visibility = 'visible'; }}">Show spinner</button>
        <button class="sd-btn green" @click="${() => { document.querySelector('.greenx').style.visibility = 'visible'; }}">Show spinner</button>
        <br><br>
        <seed-spinner class="bluex" color="var(--seed-color-blue)" background="#0d1314cf" @click="${() => { document.querySelector('.bluex').style.visibility = 'hidden'; }}"></seed-spinner>
        <seed-spinner class="redx" color="var(--seed-color-red)" @click="${() => { document.querySelector('.redx').style.visibility = 'hidden'; }}"></seed-spinner>
        <seed-spinner class="greenx" background="rgba(0, 0, 0, 0.2)" color="var(--seed-color-green)" @click="${() => { document.querySelector('.greenx').style.visibility = 'hidden'; }}"></seed-spinner>
        <p class="tags-container onerow"><span><span class="light-txt">${`<seed-spinner></seed-spinner>`}</span></span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="var(--seed-color-blue)" background="#0d1314cf"`}</span>${`></seed-spinner>`}</span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="#2dabb4"`}</span>${`></seed-spinner>`}</span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="rgb(255,255,255)"`}</span>${`></seed-spinner>`}</span>
        </p>
    `);
