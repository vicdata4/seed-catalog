import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import { seedStyle } from '../styles';
import '../stepper';

storiesOf('Seed Catalog', module)
  .add('Stepper', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
        </style>
        <h2 class="sd-btn black sm">Stepper / Dots component</h2>
        <seed-stepper .index="${0}" .size="${5}"></seed-stepper>
        <seed-stepper .index="${1}" .size="${5}"></seed-stepper>
        <seed-stepper .index="${2}" .size="${5}"></seed-stepper>
        <seed-stepper .index="${3}" .size="${5}"></seed-stepper>
        <seed-stepper .index="${4}" .size="${5}"></seed-stepper>
    `);
