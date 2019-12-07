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

            seed-spinner {
                visibility: hidden;
            }
        </style>
        
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Spinner</button>
        <br><br>
        <button id="switch" class="sd-btn blue" @click="${() => { document.querySelector('seed-spinner').style.visibility = 'visible'; }}">Show spinner</button>
        <seed-spinner color="#2dabb4" @click="${() => { document.querySelector('seed-spinner').style.visibility = 'hidden'; }}"></seed-spinner>
        <p class="tags-container"><span><span class="light-txt">${`<seed-spinner></seed-spinner>`}</span></span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="#2dabb4"`}</span>${`></seed-spinner>`}</span>
        <span>${`<seed-spinner `}<span class="light-txt">${`color="rgb(255,255,255)"`}</span>${`></seed-spinner>`}</span>
        </p>
    `);
