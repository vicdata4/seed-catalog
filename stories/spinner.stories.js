import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import '../spinner';

storiesOf('Seed Catalog', module)
  .add('Spinner', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
        </style>
        <button class="sd-btn-mix black title"><i class="material-icons green-mate">more_horiz</i>Spinner</button>
        <h6 style="color: white;">Check out Carusel section to see more examples.</h6>
        <div>
            <seed-spinner></seed-spinner>
        </div>
        
    `);
