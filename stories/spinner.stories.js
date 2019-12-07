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
        <button id="switch" class="sd-btn red-mate" @click="${() => { document.querySelector('seed-spinner').style.visibility = 'visible'; }}">Show spinner</button>
        <seed-spinner @click="${() => { document.querySelector('seed-spinner').style.visibility = 'hidden'; }}"></seed-spinner>
        <p class="tags-container"><span><span class="light-txt">${`<seed-spinner></seed-spinner>`}</span></span>
        </p>
    `);
