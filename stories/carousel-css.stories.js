import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../carousel-css';
import '../components/utils/card-examples';
import { seedStyle } from '../styles';
import { storyCommonStyles, cssTemplateColors } from '../.storybook/common-styles';

storiesOf('Seed Catalog', module)
  .add('Carousel Css', () => html`
        <style>
            ${seedStyle}
            ${storyCommonStyles}
            ${cssTemplateColors}
            seed-carousel > div {
                color: white;
            }

            .due-card {
              display: flex;
              flex-flow: row wrap;
            }

            .red:hover { background-color: var(--seed-color-red); }
            .blue:hover { background-color: var(--seed-color-blue); }
            .green:hover { background-color: var(--seed-color-green); }
            .purple:hover { background-color: var(--seed-color-purple); }
            .black:hover { background-color: var(--seed-color-black); }
            .orange:hover { background-color: var(--seed-color-orange); }
            .green-mate:hover { background-color: var(--seed-color-green-mate); }
            .red-mate:hover { background-color: var(--seed-color-red-mate); }
        </style>
        <seed-carousel-css>
          <card-examples style="background-color: #43aad7;"></card-examples>
          <card-examples style="background-color: #e18b46;"></card-examples>
          <card-examples style="background-color: #5dbe59;"></card-examples>
          <card-examples style="background-color: #b250b2;"></card-examples>
          <p slot="stepper">Stepper</p>
        </seed-carousel-css>
    `);
