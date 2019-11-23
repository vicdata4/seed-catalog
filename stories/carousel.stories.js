import { storiesOf } from '@open-wc/demoing-storybook';
import { html } from 'lit-html';
import '../components/seed-carousel';
import { seedButtonStyle } from '../styles';

storiesOf('Seed Catalog', module)
  .add('Carousel', () => html`
        <style>
            ${seedButtonStyle}

            * {
                font-family: 'Ubuntu', sans-serif;
            }

            .single-card {
                color: white;
            }
        </style>
        <h2 class="sd-btn black sm">Stepper / Dots component</h2>
        <seed-carousel>
            <div class="single-card" style="background-color: red;">
                Red
            </div>
            <div class="single-card" style="background-color: blue">
                Blue
            </div>
            <div class="single-card" style="background-color: green">
                Green
            </div>
            <div class="single-card" style="background-color: purple">
                Purple
            </div>
            <div class="single-card" class="single-card" style="background-color: orange">
                Orange
            </div>      
        </seed-carousel>
    `);