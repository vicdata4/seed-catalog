import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../components/seed-stepper';
import { seedStyle } from '../styles';

storiesOf('Seed Catalog', module)
  .add('Stepper', () => html`
        <style>
            ${seedStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }
        </style>
        <h2 class="sd-btn black sm">Stepper / Dots component</h2>
        <seed-stepper .index="${0}" .nElements="${5}"></seed-stepper>
        <seed-stepper .index="${1}" .nElements="${5}"></seed-stepper>
        <seed-stepper .index="${2}" .nElements="${5}"></seed-stepper>
        <seed-stepper .index="${3}" .nElements="${5}"></seed-stepper>
        <seed-stepper .index="${4}" .nElements="${5}"></seed-stepper>
    `);